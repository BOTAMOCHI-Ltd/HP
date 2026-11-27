import { useState } from 'react';

// ── シミュレーション計算ロジック ──────────────────────────────────
function calcEmployeePayRaise(income: number, num: number): number {
  const table: Record<number, number> = {
    25: 143508,
    30: 155160,
    35: 204648,
    40: 218532,
    50: 295164,
    60: 402420,
    70: 513780,
    80: 555864,
    90: 642468,
  };
  return (table[income] ?? 0) * num;
}

function calcSocialInsuranceChange(income: number, num: number): number {
  const table: Record<number, [number, number]> = {
    25: [36582, 28140],
    30: [42210, 33768],
    35: [50652, 39396],
    40: [57687, 47838],
    50: [70350, 57687],
    60: [83013, 70350],
    70: [94407, 83013],
    80: [98343, 91455],
    90: [102771, 96375],
  };
  const row = table[income];
  if (!row) return 0;
  return (row[0] - row[1]) * num * 12;
}

interface SimResult {
  totalRaise: number;
  perPersonRaise: number;
  socialInsuranceSaving: number;
}

function ServiceSimulator() {
  const [salary, setSalary] = useState('');
  const [users, setUsers] = useState('');
  const [result, setResult] = useState<SimResult | null>(null);

  const handleSimulate = () => {
    const inc = Number(salary);
    const num = Number(users);
    if (!inc || !num || num <= 0) return;
    const totalRaiseRaw = calcEmployeePayRaise(inc, num);
    const perPersonRaiseRaw = totalRaiseRaw / num;
    const socialInsuranceSavingRaw = calcSocialInsuranceChange(inc, num);
    const totalRaise = Math.floor(totalRaiseRaw / 1000) * 1000;
    const perPersonRaise = Math.floor(perPersonRaiseRaw / 1000) * 1000;
    const socialInsuranceSaving = Math.floor(socialInsuranceSavingRaw / 1000) * 1000;
    setResult({ totalRaise, perPersonRaise, socialInsuranceSaving });
  };

  const isValid = salary !== '' && users !== '' && Number(users) > 0;

  return (
    <div
      className="mt-12 rounded-xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f4f8 100%)',
        border: '1px solid #d0e8f5',
      }}
    >
      <div className="px-6 pt-8 pb-4 text-center">
        <h3
          className="inline-block text-2xl font-bold px-7 py-2 rounded-lg mb-3"
          style={{ fontFamily: "'Noto Serif JP', serif", color: 'rgb(25, 25, 112)' }}
        >
          導入効果を
          <br />
          シミュレーション
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          条件を選択してシミュレーション結果を確認してください
        </p>
      </div>

      <div className="px-6 pb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {/* 入力セクション */}
          <div className="flex-1 bg-white rounded-lg p-6">
            <h4 className="text-sm font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100">
              条件を選択してください
            </h4>

            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                月給
              </label>
              <select
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none cursor-pointer"
                style={{ focusBorderColor: '#00C854' } as React.CSSProperties}
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option value="25">25万円</option>
                <option value="30">30万円</option>
                <option value="35">35万円</option>
                <option value="40">40万円</option>
                <option value="50">50万円</option>
                <option value="60">60万円</option>
                <option value="70">70万円</option>
                <option value="80">80万円</option>
                <option value="90">90万円</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                利用人数
              </label>
              <div className="flex items-center gap-2 w-full min-w-0">
                <input
                  type="number"
                  value={users}
                  onChange={(e) => setUsers(e.target.value)}
                  placeholder="0"
                  min="0"
                  className="flex-1 min-w-0 w-0 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none box-border"
                />
                <span className="text-sm text-gray-600 whitespace-nowrap shrink-0">
                  名
                </span>
              </div>
            </div>

            <button
              onClick={handleSimulate}
              disabled={!isValid}
              className="w-full whitespace-nowrap text-sm font-bold py-3 rounded transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-white"
              style={{ backgroundColor: '#f0b429' }}
            >
              シミュレーションする
            </button>

            <div className="mt-4 bg-gray-50 rounded p-3">
              <p className="text-xs font-bold text-gray-700 mb-1">
                ■詳細条件
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                ・月給は手当(住宅手当)やみなし残業代を含む
                <br />
                ・家賃額は給与の25％相当と仮定
                <br />
                ・会社負担額は70％とし、残りの30％は天引き
              </p>
            </div>
          </div>

          {/* 矢印 */}
          <div className="hidden lg:flex items-center justify-center px-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className="w-0 h-0"
                style={{
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '20px solid #f0b429',
                }}
              />
            </div>
          </div>
          <div className="flex lg:hidden justify-center py-1">
            <div
              className="w-0 h-0"
              style={{
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '20px solid #f0b429',
              }}
            />
          </div>

          {/* 結果セクション */}
          <div className="flex-1 bg-white rounded-lg p-6">
            <h4 className="text-sm font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100">
              メリット結果
            </h4>

            <div className="space-y-5">
              <div className="pb-4 border-b border-gray-100">
                <p className="text-xs text-gray-600 mb-1">
                  従業員手取り増加効果
                  <span className="ml-1 text-gray-400">
                    (総計/年間)
                  </span>
                  <span className="ml-0.5 text-red-400 text-xs">※</span>
                </p>
                <p className="text-2xl font-bold" style={{ color: '#f0b429' }}>
                  {result ? result.totalRaise.toLocaleString() : '0'}
                  <span className="text-sm font-normal text-gray-600 ml-1">
                    円
                  </span>
                </p>
              </div>

              <div className="pb-4 border-b border-gray-100">
                <p className="text-xs text-gray-600 mb-1">
                  従業員手取り増加効果
                  <span className="ml-1 text-gray-400">
                    (1人あたり/年間)
                  </span>
                  <span className="ml-0.5 text-red-400 text-xs">※</span>
                </p>
                <p className="text-2xl font-bold" style={{ color: '#f0b429' }}>
                  {result ? result.perPersonRaise.toLocaleString() : '0'}
                  <span className="text-sm font-normal text-gray-600 ml-1">
                    円
                  </span>
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-1">
                  会社負担社会保険料変動額
                  <span className="ml-0.5 text-red-400 text-xs">※</span>
                </p>
                <p className="text-2xl font-bold" style={{ color: '#f0b429' }}>
                  {result ? result.socialInsuranceSaving.toLocaleString() : '0'}
                  <span className="text-sm font-normal text-gray-600 ml-1">
                    円
                  </span>
                </p>
              </div>
            </div>

            {!result && (
              <div className="mt-6 text-center text-xs text-gray-400">
                条件を入力してシミュレーションしてください
              </div>
            )}
          </div>
        </div>

        {/* LINE CTA Button */}
        <div className="flex flex-col items-center gap-1 mt-6 pb-2">
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: '#00C854' }}>
            ＼まずはLINE追加／
          </span>
          <a
            href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
            className="inline-flex items-center justify-center whitespace-nowrap text-base font-bold px-12 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: '#00C854',
              boxShadow: '0 4px 18px rgba(0, 200, 84, 0.5)',
              minWidth: 220,
            }}
          >
            無料で診断
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServiceIntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl text-center text-gray-900 mb-6"
          style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 600 }}
        >
          その悩み、<br />
          もう解決策があります。
        </h2>

        <p className="text-1xl text-center text-gray-900 mb-6">
          ゼロ福利厚生賃貸とは
        </p>
        <div className="text-gray-600 text-sm leading-relaxed text-center mb-8 max-w-3xl mx-auto">
          <div>BOTAMOCHIの経理代行とは？</div>
          <div><br /></div>
          <div>事業者様の代わりに仕分け・記帳業務を代行！</div>
          <div>領収書、通帳コピー、請求書を丸投げするだけで、</div>
          <div>プロが会計ソフト入力し試算表を出力。</div>
          <div>月額4,980円定額で無制限対応。</div>
          <div>郵送・オンライン提出で手間ゼロ、正確安心！</div>
          <div><br /></div>
        </div>
        <div className="flex justify-center mb-10">
          <img
            src={`${import.meta.env.BASE_URL}images/compressed_-LINE_-1-dc5a0a.webp`}
            alt="記帳コンシェルジュ"
            className="w-full max-w-[1160px] h-auto object-top"
          />
        </div>
        <div className="flex flex-col items-center gap-1 mb-10">
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: '#00C854' }}>
            ＼まずはLINE追加／
          </span>
          <a
            href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
            className="inline-flex items-center justify-center whitespace-nowrap text-base font-bold px-12 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: '#00C854',
              boxShadow: '0 4px 18px rgba(0, 200, 84, 0.5)',
              minWidth: 220,
            }}
          >
            無料で診断
          </a>
        </div>

        {/* メリットセクション */}
        <div className="mt-14">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-10">
            ↓導入でこんなにもメリットが↓
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* メリット1 */}
            <div className="bg-white rounded-lg p-6 text-center" style={{ border: '1px solid #e5e7eb' }}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(240, 180, 41, 0.12)' }}>
                <i className="ri-wallet-3-line text-xl" style={{ color: '#f0b429' }} />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">
                従業員の手取りがUP
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                企業の手出しゼロで従業員の
可処分所得が増えます
              </p>
            </div>

            {/* メリット2 */}
            <div className="bg-white rounded-lg p-6 text-center" style={{ border: '1px solid #e5e7eb' }}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(16, 85, 182, 0.08)' }}>
                <i className="ri-arrow-down-line text-xl" style={{ color: '#1055b6' }} />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">
                企業の社会保険料が削減
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                従業員の社会保険料が下がるため、
企業側の社会保険料も下がります
              </p>
            </div>

            {/* メリット3 */}
            <div className="bg-white rounded-lg p-6 text-center" style={{ border: '1px solid #e5e7eb' }}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 200, 84, 0.08)' }}>
                <i className="ri-user-follow-line text-xl" style={{ color: '#00C854' }} />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">
                離職率が1/3まで低下
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                福利厚生が充実するため離職率が下がります
              </p>
            </div>

            {/* メリット4 */}
            <div className="bg-white rounded-lg p-6 text-center" style={{ border: '1px solid #e5e7eb' }}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(240, 180, 41, 0.12)' }}>
                <i className="ri-briefcase-line text-xl" style={{ color: '#f0b429' }} />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">
                採用力の強化
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                採用ページにも「福利厚生賃貸」と記載でき、
採用力を強化できます
              </p>
            </div>
          </div>
        </div>

        <ServiceSimulator />
      </div>
    </section>
  );
}