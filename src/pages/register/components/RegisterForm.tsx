import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import SubmittingOverlay from './SubmittingOverlay';

interface FormData {
  companyName: string;
  lastName: string;
  firstName: string;
  lastKana: string;
  firstKana: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  gender: string;
  postalCode: string;
  address1: string;
  address2: string;
  tel: string;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  kana?: string;
  agree?: string;
}

const CURRENT_YEAR = new Date().getFullYear();

function generateYears(): number[] {
  const years: number[] = [];
  for (let y = CURRENT_YEAR; y >= 1920; y--) years.push(y);
  return years;
}

function generateMonths(): string[] {
  return Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
}

function getDaysInMonth(year: string, month: string): string[] {
  const y = parseInt(year) || 2000;
  const m = parseInt(month) || 1;
  const maxDay = new Date(y, m, 0).getDate();
  return Array.from({ length: maxDay }, (_, i) => String(i + 1).padStart(2, '0'));
}

export default function RegisterForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [days, setDays] = useState<string[]>(getDaysInMonth('', ''));

  const [form, setForm] = useState<FormData>({
    companyName: '',
    lastName: '',
    firstName: '',
    lastKana: '',
    firstKana: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    gender: '',
    postalCode: '',
    address1: '',
    address2: '',
    tel: '',
    agree: false,
  });

  useEffect(() => {
    const newDays = getDaysInMonth(form.birthYear, form.birthMonth);
    setDays(newDays);
    if (form.birthDay && parseInt(form.birthDay) > newDays.length) {
      setForm((prev) => ({ ...prev, birthDay: '' }));
    }
  }, [form.birthYear, form.birthMonth]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      if (type === 'checkbox') {
        setForm((prev) => ({
          ...prev,
          [name]: (e.target as HTMLInputElement).checked,
        }));
      } else {
        setForm((prev) => ({ ...prev, [name]: value }));
      }
    },
    []
  );

  const handleKanaInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const converted = value.replace(/[\u3041-\u3096]/g, (ch) =>
        String.fromCharCode(ch.charCodeAt(0) + 0x60)
      );
      setForm((prev) => ({ ...prev, [name]: converted }));
    },
    []
  );

  const searchPostal = async () => {
    const val = form.postalCode.replace(/-/g, '');
    if (!/^\d{7}$/.test(val)) {
      alert('郵便番号を7桁の数字で入力してください。');
      return;
    }
    try {
      const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${val}`);
      const data = await res.json();
      if (data.status === 200 && data.results) {
        const r = data.results[0];
        setForm((prev) => ({
          ...prev,
          address1: `${r.address1}${r.address2}${r.address3}`,
        }));
      } else {
        alert('該当する住所が見つかりませんでした。');
      }
    } catch {
      alert('通信エラーが発生しました。時間をおいて再度お試しください。');
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.lastName.trim() || !form.firstName.trim()) {
      newErrors.name = '姓・名を入力してください';
    }
    const lk = form.lastKana.trim();
    const fk = form.firstKana.trim();
    if (!lk || !fk) {
      newErrors.kana = 'フリガナを入力してください';
    } else if (!/^[ァ-ヶー]+$/.test(lk) || !/^[ァ-ヶー]+$/.test(fk)) {
      newErrors.kana = '全角カタカナで入力してください';
    }
    if (!form.agree) {
      newErrors.agree = '利用規約に同意してください';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const birthday =
      form.birthYear && form.birthMonth && form.birthDay
        ? `${form.birthYear}年${form.birthMonth}月${form.birthDay}日`
        : '';

    const payload = {
      company: form.companyName,
      name: `${form.lastName} ${form.firstName}`,
      furigana: `${form.lastKana} ${form.firstKana}`,
      birthday,
      gender: form.gender === 'male' ? '男性' : form.gender === 'female' ? '女性' : '',
      postal_Code: form.postalCode,
      address: `${form.address1} ${form.address2}`.trim(),
      tel: form.tel,
    };

    try {
      console.log('[RegisterForm] Sending payload:', payload);
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: payload,
      });

      console.log('[RegisterForm] Edge Function response:', { data, error });

      if (error) {
        console.error('Edge Function error:', error);
        throw new Error(error.message || 'サーバーとの通信に失敗しました');
      }

      if (data && data.error) {
        console.error('Edge Function returned error:', data.error, data.details);
        throw new Error(data.error || 'データの送信に失敗しました');
      }

      console.log('[RegisterForm] Success, navigating to /thanks');
      navigate('/thanks');
    } catch (err: any) {
      console.error('Submit error:', err);
      const errorMessage = err?.message || '送信中にエラーが発生しました';
      alert(`送信エラー: ${errorMessage}\n\n時間をおいて再度お試しください。\n\n※プレビュー環境では、セキュリティ設定により送信がブロックされる場合があります。本番環境では正常に動作します。`);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-all w-full';
  const shortInputClass =
    'border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-all w-full sm:w-36';
  const selectClass =
    'border border-gray-300 rounded-md px-2 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:border-gray-500 transition-all';

  return (
    <>
      {submitting && <SubmittingOverlay />}
    <form data-readdy-form onSubmit={handleSubmit} className="space-y-6">
      {/* 連絡先セクション */}
      <div>
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
          連絡先情報
        </h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
          {/* 会社・団体名 */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">会社・団体名</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4">
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className={inputClass}
                placeholder="例：株式会社サンプル"
                required
              />
            </div>
          </div>

          {/* 担当者氏名 */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">担当者氏名</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4 space-y-2">
              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-3 sm:flex-wrap">
                <div className="space-y-1">
                  <span className="text-xs text-gray-500">姓</span>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className={shortInputClass}
                    placeholder="山田"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-gray-500">名</span>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={shortInputClass}
                    placeholder="太郎"
                    required
                  />
                </div>
              </div>
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>
          </div>

          {/* フリガナ */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">フリガナ</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4 space-y-2">
              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-3 sm:flex-wrap">
                <div className="space-y-1">
                  <span className="text-xs text-gray-500">セイ</span>
                  <input
                    type="text"
                    name="lastKana"
                    value={form.lastKana}
                    onChange={handleKanaInput}
                    className={shortInputClass}
                    placeholder="ヤマダ"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-gray-500">メイ</span>
                  <input
                    type="text"
                    name="firstKana"
                    value={form.firstKana}
                    onChange={handleKanaInput}
                    className={shortInputClass}
                    placeholder="タロウ"
                    required
                  />
                </div>
              </div>
              {errors.kana && <p className="text-xs text-red-500">{errors.kana}</p>}
            </div>
          </div>

          {/* 生年月日 */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">生年月日</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4">
              <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                <select
                  name="birthYear"
                  value={form.birthYear}
                  onChange={handleChange}
                  className={`${selectClass} flex-1 min-w-0 sm:flex-none sm:w-24`}
                  required
                >
                  <option value="">----</option>
                  {generateYears().map((y) => (
                    <option key={y} value={String(y)}>
                      {y}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-500">年</span>
                <select
                  name="birthMonth"
                  value={form.birthMonth}
                  onChange={handleChange}
                  className={`${selectClass} w-14 sm:w-16`}
                  required
                >
                  <option value="">--</option>
                  {generateMonths().map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-500">月</span>
                <select
                  name="birthDay"
                  value={form.birthDay}
                  onChange={handleChange}
                  className={`${selectClass} w-14 sm:w-16`}
                  required
                >
                  <option value="">--</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-500">日</span>
              </div>
            </div>
          </div>

          {/* 性別 */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">性別</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4">
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === 'male'}
                    onChange={handleChange}
                    className="cursor-pointer"
                    required
                  />
                  <span className="text-sm text-gray-700">男性</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === 'female'}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">女性</span>
                </label>
              </div>
            </div>
          </div>

          {/* 郵便番号 */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">郵便番号</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4 space-y-1">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  maxLength={8}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-all flex-1 sm:flex-none sm:w-36"
                  placeholder="100-0001"
                  required
                />
                <button
                  type="button"
                  onClick={searchPostal}
                  className="px-3 sm:px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                >
                  住所検索
                </button>
              </div>
              <p className="text-xs text-gray-400">半角数字（例：100-0001）</p>
            </div>
          </div>

          {/* 住所 */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">住所</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4 space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-gray-400">住所</p>
                <input
                  type="text"
                  name="address1"
                  value={form.address1}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="東京都千代田区千代田1-1"
                  required
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400">建物名・部屋番号</p>
                <input
                  type="text"
                  name="address2"
                  value={form.address2}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="〇〇ビル 101号室"
                />
              </div>
            </div>
          </div>

          {/* 連絡先TEL */}
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 bg-gray-50 px-5 py-4 flex items-center gap-1">
              <span className="text-sm text-gray-600 font-medium">連絡先TEL</span>
              <span className="text-red-500 text-xs">*</span>
            </div>
            <div className="flex-1 px-5 py-4">
              <input
                type="tel"
                name="tel"
                value={form.tel}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-all w-full sm:w-48"
                placeholder="03-0000-0000"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* 利用規約 */}
      <div>
        <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
          同意事項
        </h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-5 space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer accent-gray-700"
              />
              <label htmlFor="agree" className="text-sm text-gray-700 cursor-pointer">
                サービス利用に同意します
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>
            {errors.agree && <p className="text-xs text-red-500">{errors.agree}</p>}
          </div>
        </div>
      </div>

      {/* 送信ボタン */}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="relative px-12 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 active:scale-95 transition-all duration-150 cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
        >
          <span className={`transition-opacity duration-200 ${submitting ? 'opacity-0' : 'opacity-100'}`}>
            確認して送信する
          </span>
          {submitting && (
            <span className="absolute inset-0 flex items-center justify-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              <span className="text-sm">送信中</span>
            </span>
          )}
        </button>
      </div>

      <p className="text-center text-xs text-gray-400">
        <span className="text-red-500">*</span> は必須項目です
      </p>
    </form>
    </>
  );
}