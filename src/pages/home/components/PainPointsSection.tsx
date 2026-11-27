import { useEffect, useRef, useState } from 'react';

const painPoints = [
  {
    tag: '問題1',
    image: `${import.meta.env.BASE_URL}images/painpoint-cde21b.png`,
    title: '賃上げしたいが、財源がない...',
    body: '物価高で従業員の生活が苦しくなっているが、利益を削ってまで賃上げする余力がない。',
  },
  {
    tag: '問題2',
    image: `${import.meta.env.BASE_URL}images/painpoint-25eeb2.png`,
    title: '大企業の福利厚生に採用で負ける...',
    body: '社宅・住宅補助が充実した大企業に対して、中小企業は福利厚生で太刀打ちできず、優秀な人材の採用・定着に苦戦している。',
  },
  {
    tag: '問題3',
    image: `${import.meta.env.BASE_URL}images/painpoint-14144d.png`,
    title: '社宅制度が複雑で手が出ない...',
    body: '労務・税務・宅建業法など複雑な法令が絡み合い、専門知識なしに導入するのは困難。中小企業向けの使いやすいサービスがない。',
  },
];

function PainPointCard({ item, index, visible }: { item: typeof painPoints[0]; index: number; visible: boolean }) {
  return (
    <div
      className="mb-6 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded mb-4 text-white"
            style={{ backgroundColor: '#666' }}
          >
            {item.tag}
          </span>
          <h3 className="whitespace-pre-wrap text-base font-bold mb-3" style={{ color: '#191970' }}>
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.body}
          </p>
        </div>
        {/* Right: image */}
        <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function PainPointsSection() {
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16" style={{ backgroundColor: '#ebf3fd' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#191970' }}>
          全部「しょうがない」で<br className="hidden md:block" />
          片付けてきませんでしたか？
        </h2>

        <div ref={gridRef}>
          {painPoints.map((item, index) => (
            <PainPointCard key={index} item={item} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}