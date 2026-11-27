import { useState } from 'react';

const faqs = [
  {
    q: '初期費用はかかりますか？',
    a: `かかりません。社宅切り替え時に費用は発生しますが、社宅切り替えによって削減できる会社負担の社会保険料でほぼカバーできるため、実質ゼロコストで運営いただける企業様が大多数です。まずはどれぐらい社会保険料が削減できるかシミュレーションし、確認してみてください。`,
  },
  {
    q: '会社の社会保険料はどれぐらい削減できますか？',
    a: '条件によりますが、月給35万円・家賃8万円の場合、1人あたり年間約10万円の企業側社会保険料の削減が見込めます。',
  },
  {
    q: '会社が家賃を負担する必要がありますか？',
    a: '会社が追加で家賃を支払う必要はありません。従業員の給与の一部を現物支給（社宅提供）に切り替える仕組みのため、会社の実質的な追加コストはゼロです。',
  },
  {
    q: '法律のチェックなどはクリアしている仕組みなのでしょうか？',
    a: 'この制度は、所得税や社会保険などに関する各種法律をしっかり守って設計されています。法的な正当性はもちろん、税務上の心配もありませんのでご安心ください。※最終的な判断については、貴社の顧問税理士さんなど専門家の方にもご確認いただけるとより確実です。',
  },
  {
    q: '対応業種・会社形態に制限はありますか？ ',
    a: '株式会社・合同会社・医療法人など、法人格があれば基本的に対応可能です。業種による制限もありません。',
  },
  {
    q: '従業員が何人いれば導入できますか？ ',
    a: `1名から導入可能です。特に10〜100名規模の企業様に多くご利用いただいています。
従業員数が多いほど削減できる社会保険料も大きくなりますが、少人数でも十分な効果が出るケースがほとんどです。`,
  },
  {
    q: '全員が対象になりますか？',
    a: '賃貸物件にお住まいの従業員が対象です。持ち家・実家住みの従業員は対象外となります。',
  },
  {
    q: '導入までどのくらいかかりますか？ ',
    a: '最短1週間で運用開始できます。就業規則の変更・賃貸契約の名義変更・従業員への説明会まで、ゼロ福利のチームが全て代行します。',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16" style={{ backgroundColor: '#f5f8ff' }}>
      <div className="max-w-[880px] mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">
          よくあるご質問
        </h2>

        <dl className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 last:border-b-0">
              <dt>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer hover:bg-blue-50/50 transition-colors px-2 -mx-2 rounded"
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 text-sm font-bold mt-0.5"
                      style={{ color: '#1055b6' }}
                    >
                      Q
                    </span>
                    <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                  </span>
                  <span className="flex-shrink-0 mt-0.5">
                    <i
                      className={`ri-arrow-down-s-line text-xl transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                      style={{ color: '#1055b6' }}
                    ></i>
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="pb-5 px-2">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-sm font-bold" style={{ color: '#f0b429' }}>A</span>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
