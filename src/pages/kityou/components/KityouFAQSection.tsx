import { useState } from 'react';

const faqs = [
  {
    q: '領収書は何枚まで対応してもらえますか？',
    a: '月額9,800円(税込)定額で無制限対応いたします',
  },
  {
    q: '現金取引が多くても記帳代行は利用できますか？',
    a: '利用可能です。現金出納帳の作成や残高確認まで対応しているサービスを選ぶと安心です。',
  },
  {
    q: 'freeeやマネーフォワードなどの会計ソフトにも対応していますか？',
    a: '多くの記帳代行サービスが主要クラウド会計ソフトに対応しています。事前に対応ソフトを確認しましょう。',
  },
  {
    q: '確定申告までやってもらえますか？',
    a: '記帳代行のみの場合、確定申告は別途対応になります。オプションや税理士連携があるか確認が必要です。',
  },
  {
    q: '途中解約はできますか？',
    a: 'サービスによって異なります。最低契約期間や解約条件がないか、事前に確認することをおすすめします。',
  },
];

export default function KityouFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">記帳代行に関するよくある質問</h2>
        <div className="w-16 h-1 bg-teal-400 rounded-full mb-6"></div>
        <p className="text-sm md:text-base text-gray-600 leading-loose mb-10">
          初めて記帳代行サービスを利用する場合、「どこまでの業務を依頼できるのか」「契約後に解約はできるのか」「現金取引が多い事業でも対応してもらえるのか」といった疑問を抱く方は少なくありません。サービスを安心して利用するためには、事前に気になるポイントを把握しておくことが大切です。ここでは、記帳代行をご検討中の方から寄せられることの多い質問をQ&A形式でまとめました。導入前によくある不安や疑問を解消し、自分に合ったサービスを選ぶ際の参考にしてください。
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-base shrink-0 mt-0.5">Q</span>
                  <h3 className="text-sm font-bold text-gray-800">{faq.q}</h3>
                </div>
                <i className={`shrink-0 ml-3 text-teal-500 text-xl transition-transform duration-200 ${openIndex === index ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-500 font-black text-base shrink-0 mt-0.5">A</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}