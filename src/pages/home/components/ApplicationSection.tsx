const steps = [
  {
    img: `${import.meta.env.BASE_URL}images/unnamed-429823.jpeg`,
    title: 'キックオフ',
    desc: '目的の確認と、今後の進め方・期限の整理を行います。',
  },
  {
    img: `${import.meta.env.BASE_URL}images/unnamed-706b80.png`,
    title: '法的に必要な各種書類の作成・締結作業',
    desc: 'ベースとなる資料はすべて当社が提供いたします。ゼロから作成する手間はございません。',
  },
  {
    img: `${import.meta.env.BASE_URL}images/unnamed-120043.jpeg`,
    title: '社内説明会の実施',
    desc: '担当者様の工数はゼロ。従業員様への周知に必要な準備と実施は、私たちが一貫して代行します。',
  },
  {
    img: `${import.meta.env.BASE_URL}images/unnamed-6889fa.png`,
    title: '名義変更手続き',
    desc: '書類のやり取りから各所への連絡まで一括して代行するため、導入時の手間はかかりません。',
  },
];

export default function ApplicationSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
          導入の流れ
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-0 relative mb-12">
          {steps.map((step, index) => (
            <li key={index} className="flex flex-col items-center relative pt-3">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[60px] left-[calc(50%+40px)] right-0 h-0.5"
                  style={{ backgroundColor: '#d1e3f8', zIndex: 0, width: 'calc(100% - 80px)', left: 'calc(50% + 48px)' }}
                />
              )}

              {/* Step number bubble */}
              <div
                className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm mb-3"
                style={{ backgroundColor: '#1055b6' }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Image */}
              <div className="w-full flex justify-center mb-4 h-20">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-20 w-auto object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-center px-3">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: '#00C854' }}>＼まずはLINE追加／</span>
          <a
            href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
            className="inline-flex items-center whitespace-nowrap text-sm font-bold px-8 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00C854', boxShadow: '0 4px 14px rgba(0, 200, 84, 0.45)', minWidth: 180 }}
          >
            無料で診断
          </a>
        </div>
      </div>
    </section>
  );
}
