import { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);

const DEPARTMENTS = [
  '経営・役員',
  '総務・人事',
  '経理・財務',
  '営業・マーケティング',
  'IT・システム',
  '法務・コンプライアンス',
  '広報・IR',
  'その他',
];

const POSITIONS = [
  '代表取締役・社長',
  '取締役・役員',
  '部長・本部長',
  '課長・マネージャー',
  '係長・チームリーダー',
  '主任・リーダー',
  '一般社員・スタッフ',
  'その他',
];

interface FormData {
  lastName: string;
  firstName: string;
  company: string;
  email: string;
  phone: string;
  employees: string;
  department: string;
  position: string;
  message: string;
  agreed: boolean;
}

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>({
    lastName: '',
    firstName: '',
    company: '',
    email: '',
    phone: '',
    employees: '',
    department: '',
    position: '',
    message: '',
    agreed: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed) {
      setError('個人情報の取扱いへの同意が必要です。');
      return;
    }
    setError('');
    setSubmitting(true);

    const body = new URLSearchParams({
      '名前（姓）': form.lastName,
      '名前（名）': form.firstName,
      '会社名': form.company,
      email: form.email,
      '電話番号': form.phone,
      '従業員数': form.employees,
      '部門': form.department,
      '役職': form.position,
      'お問い合わせ内容': form.message,
      '個人情報同意': '同意する',
    });

    try {
      // Readdy フォームへ送信
      await fetch('https://readdy.ai/api/form/d7m43ao2li4t868hjd0g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      // Resend でメール通知送信
      await supabase.functions.invoke('send-inquiry-email', {
        body: {
          lastName: form.lastName,
          firstName: form.firstName,
          company: form.company,
          email: form.email,
          phone: form.phone,
          employees: form.employees,
          department: form.department,
          position: form.position,
          message: form.message,
        },
      });

      setSubmitted(true);
    } catch {
      setError('送信中にエラーが発生しました。しばらく経ってから再度お試しください。');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-full bg-green-50">
          <i className="ri-check-line text-3xl text-green-500"></i>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">お問い合わせを受け付けました</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          ご入力いただいたメールアドレス宛に確認メールをお送りしました。<br />
          担当者より2〜3営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      data-readdy-form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* 名前（姓） */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>名前（姓）【必須】
        </label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="山田"
          required
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      {/* 名前（名） */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>名前（名）【必須】
        </label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="太郎"
          required
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      {/* 会社名 */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>会社名【必須】
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="株式会社〇〇"
          required
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>メールアドレス【必須】
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@company.com"
          required
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      {/* 電話番号 */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>会社の電話番号または携帯電話【必須】
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="080-1234-5678"
          required
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      {/* 従業員数 */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>会社の従業員数【必須】
        </label>
        <input
          type="text"
          name="employees"
          value={form.employees}
          onChange={handleChange}
          placeholder="従業員数"
          required
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
      </div>

      {/* 部門 */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>部門【必須】
        </label>
        <div className="relative">
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all cursor-pointer"
          >
            <option value="">選択してください</option>
            {DEPARTMENTS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <i className="ri-arrow-down-s-line text-gray-400 text-lg"></i>
          </div>
        </div>
      </div>

      {/* 役職 */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          <span className="text-red-500 mr-1">*</span>役職【必須】
        </label>
        <div className="relative">
          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all cursor-pointer"
          >
            <option value="">選択してください</option>
            {POSITIONS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <i className="ri-arrow-down-s-line text-gray-400 text-lg"></i>
          </div>
        </div>
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          お問い合わせ内容詳細【任意】
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="（例）製品の導入を検討しており、機能や料金について詳しく話を聞きたい。"
          maxLength={500}
          rows={5}
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-white resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
        />
        <p className="text-xs text-gray-400 text-right mt-1">{form.message.length}/500文字</p>
      </div>

      {/* 同意チェック */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agreed"
          name="agreed"
          checked={form.agreed}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-yellow-500 cursor-pointer flex-shrink-0"
        />
        <label htmlFor="agreed" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
          <a href={`${import.meta.env.BASE_URL}privacy-policy`} target="_blank" rel="noopener noreferrer" className="underline text-gray-800 hover:text-yellow-600 transition-colors">
            個人情報の取扱い
          </a>
          と上記について同意します
        </label>
      </div>

      {/* エラー */}
      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {error}
        </p>
      )}

      {/* 送信ボタン */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-full text-base font-bold text-white transition-opacity disabled:opacity-60 cursor-pointer whitespace-nowrap"
          style={{ backgroundColor: '#F5A800' }}
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block"></span>
              送信中...
            </span>
          ) : (
            '問い合わせる'
          )}
        </button>
      </div>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        ※フォームが表示されない場合は、広告ブロック機能が原因の可能性があります。<br />
        お使いの広告ブロック機能を一時的に無効にするか、別のブラウザをお試しください。
      </p>
    </form>
  );
}
