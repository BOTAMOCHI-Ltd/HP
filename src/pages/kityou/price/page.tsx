import KityouNavbar from '../components/KityouNavbar';
import KityouFooter from '../components/KityouFooter';
import { Link } from 'react-router-dom';

const plans = [
  {
    price: '9,800',
    recommended: ['書類管理を完全に外注したい', '領収書の保管スペースに困っている', '管理の手間を最小限にしたい'],
    includes: ['領収書の仕訳入力', '通帳明細の入力', '請求書の入力', '現金出納帳の入力', '月次試算表の作成・共有', '元国税調査官監修のチェック', '請求書・領収書PDF化', '領収書保管', '優先対応'],
    notIncludes: [],
    highlighted: false,
    color: 'border-gray-200',
  },
];

const comparisonHeaders = ['', '基本プラン', 'スタンダード', 'プレミアム'];
const comparisonRows = [
  { label: '月額料金（税込）', values: ['6,600円', '8,800円', '9,900円'] },
  { label: '領収書の仕訳入力', values: ['✓', '✓', '✓'] },
  { label: '通帳明細の入力', values: ['✓', '✓', '✓'] },
  { label: '請求書の入力', values: ['✓', '✓', '✓'] },
  { label: '現金出納帳の入力', values: ['✓', '✓', '✓'] },
  { label: '月次試算表の作成・共有', values: ['✓', '✓', '✓'] },
  { label: '元国税調査官監修のチェック', values: ['✓', '✓', '✓'] },
  { label: '請求書・領収書PDF化', values: ['—', '✓', '✓'] },
  { label: '領収書保管', values: ['—', '—', '✓'] },
  { label: '優先対応', values: ['—', '—', '✓'] },
];

export default function KityouPricePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <KityouNavbar />

      {/* Page Header */}
      <div
        className="pt-16 lg:pt-20 relative bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${import.meta.env.BASE_URL}images/compressed__-1-3fff39.webp)`,
        }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 py-12 text-center z-10">
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            料金について
          </h1>
        </div>
      </div>

      <main>
        {/* Intro */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-xl font-black text-gray-900 mb-4">
              月額9,800円（税込）の定額制。シンプルで分かりやすい記帳代行プラン
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              経理業務に時間を取られ、本業へ十分な時間を確保できていないと感じていませんか。領収書やレシートの整理、仕訳入力、確定申告前の帳簿作成など、日々の経理は想像以上に負担が大きいものです。<br />
              当サービスでは、そんな個人事業主・フリーランスの方に向けて、月額9,800円（税込）の定額制プランをご用意しています。領収書や請求書、通帳の明細などをお送りいただくだけで、会計ソフトへの仕訳入力から試算表の作成・共有まで、専門スタッフが対応します。<br />
              料金は領収書や仕訳件数に関係なく定額。取引量が増えても追加料金を気にする必要がないため、毎月のコストを把握しやすく、安心してご利用いただけます。また、初期費用は0円のため、初めて記帳代行を利用する方でも気軽に始められます。<br />
              さらに、すべての記帳業務は元国税調査官監修のチェック体制のもとで行うため、正確性にも配慮。経理の手間や入力ミスへの不安を減らし、本業に集中できる環境づくりをサポートします。<br />
              シンプルで分かりやすい1つの定額プランだから、「どのプランを選べばいいか分からない」と迷うこともありません。このページでは、月額9,800円（税込）で対応するサービス内容や利用できるサポートについて、詳しくご紹介します。<br />
            </p>
          </div>
        </section>

        {/* Plans */}
        <section id="dounyu" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900">
                料金<br />
                <span className="text-teal-500">プロに記帳をお任せ</span>
              </h2>
              <p className="text-sm text-gray-500 mt-3">
                領収書や通帳、請求書を丸投げするだけで、元国税調査官監修の正確な仕訳入力と毎月の試算表作成・共有が含まれます。仕訳数が増えても料金が変わらない定額制なので、事業が成長しても予算が狂いません。
              </p>
            </div>

            <div className="space-y-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl border-2 ${plan.color} overflow-hidden ${plan.highlighted ? 'shadow-lg' : ''} relative`}
                >
                  {plan.highlighted && (
                    <div className="bg-teal-500 text-white text-center text-sm font-bold py-1.5">
                      人気プラン
                    </div>
                  )}
                  <div className="p-6 lg:p-10">
                    {/* Plan Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                      <div className="lg:w-64">
                        <h3 className="text-base font-black text-gray-900 mb-3">{plan.subtitle}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{plan.desc}</p>
                      </div>

                      <div className={`shrink-0 flex flex-col items-center justify-center rounded-2xl p-6 ${plan.highlighted ? 'bg-teal-50 border border-teal-200' : 'bg-gray-50 border border-gray-100'}`}>
                        <span className="text-xs text-gray-500 mb-1">月額</span>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-5xl font-black ${plan.highlighted ? 'text-teal-500' : 'text-gray-800'}`}>
                            {plan.price}
                          </span>
                          <span className="text-sm text-gray-500 font-bold">税込円</span>
                        </div>
                      </div>

                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">おすすめな人</h4>
                          <ul className="space-y-1.5">
                            {plan.recommended.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                <i className="ri-checkbox-circle-fill text-teal-500 mt-0.5 shrink-0"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">料金に含まれるもの</h4>
                          <ul className="space-y-1.5">
                            {plan.includes.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                                <i className="ri-check-line text-teal-500 shrink-0"></i>
                                {item}
                              </li>
                            ))}
                            {plan.notIncludes.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                                <i className="ri-close-line text-gray-300 shrink-0"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
          </div>
        </section>

      </main>

      <KityouFooter />
    </div>
  );
}