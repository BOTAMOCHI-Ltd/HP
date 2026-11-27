import { useState } from 'react';

const faqs = [
  {
    q: '記帳代行のサービス範囲は？',
    a: 'お客様から「領収書」「通帳コピー」「売上請求書」「仕入れ請求書」「現金出納帳」などをいただき、当社で会計ソフトに入力し、試算表を出せる状態にするまでが範囲です。',
  },
  {
    q: 'パソコンを所有していませんが大丈夫でしょうか？',
    a: 'はい、大丈夫です。データをご提出いただくか、書類を郵送していただく形で対応可能です。',
  },
  {
    q: 'どのくらいの頻度で資料を渡せば良いですか？',
    a: '毎月1回、前月分をまとめてお渡しください（例: 毎月10日頃）。締め日や事業サイクルに合わせて調整可能です。',
  },
  {
    q: '預けた領収書などはいつ返却されますか？',
    a: '12月分まで集計が完了した後返却させていただいております。',
  },
  {
    q: '記帳代行の料金相場はどのくらいですか？',
    a: '一般相場は1仕訳50〜100円（月4〜5万円程度）ですが、当サービスは月額9,800円(税込)にて無制限で業界最安値級。仕訳数が増えても追加料金なしです。',
  },
];

export default function MainFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            <a href="#faq" className="hover:text-emerald-600 transition-colors">よくある質問</a>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center space-x-3 pr-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors ${openIndex === i ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}`}>Q</span>
                  <span className="text-sm font-semibold text-gray-700">{faq.q}</span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-emerald-500 rotate-180' : 'bg-gray-100'}`}>
                  <i className={`ri-arrow-down-s-line text-lg ${openIndex === i ? 'text-white' : 'text-gray-400'}`}></i>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5">
                  <div className="flex items-start space-x-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-sm font-bold text-emerald-600">A</span>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
