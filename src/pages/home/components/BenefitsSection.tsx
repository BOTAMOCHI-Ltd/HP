import { ReactNode } from 'react';

interface FeatureRowProps {
  tag: string;
  title: ReactNode;
  description: string;
  annotations?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

function FeatureRow({ tag, title, description, annotations, imageSrc, imageAlt, reverse }: FeatureRowProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 py-10 border-b border-gray-100 last:border-0`}>
      <div className="flex-1">
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded mb-4 text-white"
          style={{ backgroundColor: '#1055b6' }}
        >
          {tag}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">{title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">{description}</p>
        {annotations && (
          <ul className="space-y-1">
            {annotations.map((note, i) => (
              <li key={i} className="text-xs text-gray-500">{note}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex-shrink-0 md:w-[480px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-top"
        />
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          従業員にも会社にも<br />大きなメリット
        </h2>

        <FeatureRow
          tag="従業員のメリット"
          title="税金・社会保険料が低下し

手取りアップ"
          description="従業員の住む賃貸物件を会社名義に切り替え、家賃を給与から天引きすることで、額面給与が下がり所得税や社会保険料が低下して手取りが増えます。"
          imageSrc={`${import.meta.env.BASE_URL}images/Gemini_Generated_Image_1s7eod1s7eod1s7e-b45e58.png`}
          imageAlt="手取りアップ"
          reverse={false}
        />

        <FeatureRow
          tag="会社のメリット"
          title={<>ゼロ福利導入で離職率改善！<sup className="text-xs align-super">※</sup></>}
          description="福利厚生賃貸を導入することで、離職率は1/3程度(弊社サービス利用社員)への低下が期待でき、従業員の離職率・定着率改善や、採用面でも良い影響が期待できます。"
          annotations={[
            '※ 厚生労働省「令和4年雇用動向調査結果の概況」',
            '※ 福利厚生賃貸利用者離職率は当社調べ',
          ]}
          imageSrc={`${import.meta.env.BASE_URL}images/Gemini_Generated_Image_ps5ltops5ltops5l-445ae9.png`}
          imageAlt="離職率改善"
          reverse={true}
        />

        <FeatureRow
          tag="会社のメリット"
          title="運用コストは実質無料"
          description="制度設計は無料でご案内しております。社宅契約完了後、成果報酬をいただきますが、社会保険料低下分でまかなえるため、運用コスト実質無料で福利厚生の拡充を実現できます。"
          annotations={[
            '※ サービス利用料よりも社会保険料低下分が上回るケースがほとんどのため実質無料と記載しています。低下分については専門家にご相談ください。',
          ]}
          imageSrc={`${import.meta.env.BASE_URL}images/Gemini_Generated_Image_m40smym40smym40s-a511c3.png`}
          imageAlt="運用コスト実質無料"
          reverse={false}
        />

        {/* CTA */}
        <div className="flex flex-col items-center gap-1 mt-10">
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: '#00C854' }}>＼まずはLINE追加／</span>
          <a
            href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
            className="inline-flex items-center justify-center whitespace-nowrap text-base font-bold px-12 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00C854', boxShadow: '0 4px 18px rgba(0, 200, 84, 0.5)', minWidth: 220 }}
          >
            無料で診断
          </a>
        </div>
      </div>
    </section>
  );
}
