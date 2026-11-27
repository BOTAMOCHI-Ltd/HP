import { useEffect, useRef, useState } from 'react';

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <AnimatedCard>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              導入事例
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              ゼロ福利を導入された企業様のお声をご紹介
            </p>
          </div>
        </AnimatedCard>

        {/* 2カラムグリッド - PC統一レイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company A */}
          <AnimatedCard delay={100}>
            <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col h-full">
              <img
                src={`${import.meta.env.BASE_URL}images/ChatGPT-Image-2026425-18_36_25-e6cee5.png`}
                alt="株式会社A"
                className="w-full h-[200px] object-cover object-top"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-bold text-gray-900 mb-4">株式会社A 様</p>
                <div className="relative flex-1">
                  <div className="absolute -top-1 -left-1 text-4xl opacity-10" style={{ color: 'rgb(255, 140, 0)' }}>
                    <i className="ri-double-quotes-l"></i>
                  </div>
                  <div className="pt-5">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      離職の面談をするたびに<span className="font-bold" style={{ color: 'rgb(25, 25, 112)' }}>「給与面が…」</span>という言葉が出てくる。でも、全員の給与を上げることはできない。何か打ち手はないかと探していたところ、ゼロ福利を知りました。
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      エンゲージメントサーベイのスコアも上がりましたし、<span className="font-bold" style={{ color: 'rgb(255, 140, 0)' }}>退職の申し出が明らかに減りました。</span>『会社が自分のことを考えてくれている』という実感が、社員の定着に効いていると思っています。
                    </p>
                  </div>
                  <div className="absolute -bottom-2 -right-1 text-4xl opacity-10" style={{ color: 'rgb(255, 140, 0)' }}>
                    <i className="ri-double-quotes-r"></i>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Company S */}
          <AnimatedCard delay={200}>
            <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col h-full">
              <img
                src={`${import.meta.env.BASE_URL}images/ChatGPT-Image-2026425-18_43_48-962161.png`}
                alt="株式会社S"
                className="w-full h-[200px] object-cover object-top"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-bold text-gray-900 mb-4">株式会社S 様</p>
                <div className="relative flex-1">
                  <div className="absolute -top-1 -left-1 text-4xl opacity-10" style={{ color: 'rgb(255, 140, 0)' }}>
                    <i className="ri-double-quotes-l"></i>
                  </div>
                  <div className="pt-5">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      スタートアップが、大企業と採用で戦うのは正直しんどい。<span className="font-bold" style={{ color: 'rgb(25, 25, 112)' }}>給与水準では勝てない。</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      福利厚生も<span className="font-bold" style={{ color: 'rgb(25, 25, 112)' }}>「社宅なんてうちには無理」</span>と諦めていました。
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      求人票に<span className="font-bold" style={{ color: 'rgb(255, 140, 0)' }}>『借上社宅制度あり』</span>と書いた途端、問い合わせが変わりました。戦うカードが一枚増えた感覚です。
                    </p>
                  </div>
                  <div className="absolute -bottom-2 -right-1 text-4xl opacity-10" style={{ color: 'rgb(255, 140, 0)' }}>
                    <i className="ri-double-quotes-r"></i>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
