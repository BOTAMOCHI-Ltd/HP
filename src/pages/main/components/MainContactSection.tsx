export default function MainContactSection() {
  return (
    <section id="contact" className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-4">FREE CONSULTATION</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            <a href="#contact" className="hover:text-emerald-600 transition-colors">無料相談を受け付けています</a>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80">
              <img
                alt="記帳コンシェルジュ メイン画像"
                title="記帳コンシェルジュ メイン画像"
                className="w-full h-full object-cover object-top"
                src={`${import.meta.env.BASE_URL}images/1-67a773.jpg`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-6">
                  {[
                    { icon: 'ri-file-text-line', label: '無料相談' },
                    { icon: 'ri-time-line', label: '即導入可能' },
                    { icon: 'ri-lock-line', label: '無料シミュレーション' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                        <i className={`${item.icon} text-white text-sm`}></i>
                      </div>
                      <span className="text-white text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-gray-50 rounded-2xl p-10 flex flex-col items-center space-y-6 w-full max-w-sm border border-gray-100">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06C755] rounded-full">
                <i className="ri-line-fill text-4xl text-white"></i>
              </div>
              <p className="text-xl font-bold text-gray-700 text-center">LINEで無料相談</p>
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                代行することでどんな得があるのか、
など丁寧にお答えいたします。
              </p>
              <a
                href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#06C755] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#05b34b] transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-line-fill text-2xl"></i>
                </div>
                <span>LINE診断をスタート</span>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-xl"></i>
                </div>
              </a>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-shield-check-line text-emerald-500 text-sm"></i>
                </div>
                <span>お問い合わせ内容は厳重に管理いたします。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}