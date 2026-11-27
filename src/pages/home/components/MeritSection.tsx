import { useEffect, useRef, useState } from 'react';

const merits = [
  {
    icon: 'ri-wallet-3-line',
    heading: '従業員の手取りがUP',
    body: '企業の手出しゼロで従業員の可処分所得が増えます',
  },
  {
    icon: 'ri-building-2-line',
    heading: '企業の社会保険料が削減',
    body: '従業員の社会保険料が下がるため企業側の社会保険料も下がります',
  },
  {
    icon: 'ri-user-heart-line',
    heading: '離職率が1/3まで低下',
    body: '福利厚生が充実するため、離職率が下がります',
  },
  {
    icon: 'ri-megaphone-line',
    heading: '採用力の強化',
    body: '採用ページにも「福利厚生賃貸」と記載でき、採用力を強化できます',
  },
];

function MeritCard({ merit, index, visible }: { merit: typeof merits[0]; index: number; visible: boolean }) {
  return (
    <div
      className="flex items-start gap-4 rounded-xl p-6 transition-all duration-700"
      style={{
        backgroundColor: '#FFF8F0',
        border: '2px solid rgb(255, 140, 0)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0"
        style={{ backgroundColor: 'rgb(255, 140, 0)' }}
      >
        <i className={`${merit.icon} text-white text-xl`}></i>
      </div>
      <div>
        <h3
          className="text-base md:text-lg font-extrabold mb-1"
          style={{ color: 'rgb(255, 140, 0)' }}
        >
          {merit.heading}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">{merit.body}</p>
      </div>
    </div>
  );
}

export default function MeritSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* 見出しブロック */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div
            className="relative w-full max-w-3xl px-8 py-6 md:px-12 md:py-8 rounded-2xl border-4 border-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgb(255, 140, 0) 0%, rgb(230, 100, 0) 100%)',
            }}
          >
            {/* 装飾的な背景円 */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
              style={{ backgroundColor: 'white' }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-15"
              style={{ backgroundColor: 'white' }}
            />

            {/* 上部の装飾ライン */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-8 h-[2px] bg-white/60 rounded-full" />
              <i className="ri-sparkling-2-fill text-white/80 text-sm" />
              <div className="w-8 h-[2px] bg-white/60 rounded-full" />
            </div>

            {/* メインテキスト */}
            <h2 className="relative text-white font-extrabold text-xl md:text-3xl leading-relaxed text-center tracking-wide pt-4">
              「ゼロ福利」を福利厚生にすると<br className="hidden md:block" />
              会社にも従業員にも大きなメリットが！！
            </h2>

            {/* 下部の装飾ライン */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-8 h-[2px] bg-white/60 rounded-full" />
              <i className="ri-sparkling-2-fill text-white/80 text-sm" />
              <div className="w-8 h-[2px] bg-white/60 rounded-full" />
            </div>
          </div>
        </div>

        {/* 2×2グリッド */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {merits.map((merit, index) => (
            <MeritCard key={index} merit={merit} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
