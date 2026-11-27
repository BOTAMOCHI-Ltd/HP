export default function MainHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center md:object-top"
          src={`${import.meta.env.BASE_URL}images/compressed_-LINE_-1-dc5a0a.webp`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/85 md:bg-gradient-to-r md:from-white/85 md:via-white/40 md:to-transparent"></div>
      </div>
      <div className="relative z-10 w-full px-6 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100vh-10rem)] md:min-h-[70vh]">
          <div className="flex flex-col items-start space-y-4 md:space-y-6 max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/95 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="text-white text-xs md:text-sm font-medium">領収書・通帳・請求書の入力、試算表作成</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
              <span className="block"><span className="text-emerald-600">個人事業主</span>の</span>
              <span className="block mt-1 md:mt-2">仕訳・記帳を代行</span>
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4 md:space-y-6 max-w-lg mt-8 md:mt-12">
            <div className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed bg-white/90 px-5 py-4 md:px-6 md:py-5 rounded-2xl">
              <p className="mb-4">
                仕訳無制限！<br />
                領収書を送るだけ！<br />
                元国税専門官監修！
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-end w-full sm:w-auto gap-3 sm:gap-0 sm:space-x-4">
                <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
                  <span className="text-sm font-semibold whitespace-nowrap">＼まずはLINE追加／</span>
                  <a
                    href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold px-8 py-3 rounded-full text-white bg-[#06C755] hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto"
                  >
                    無料で診断
                  </a>
                </div>
                <button
                  onClick={() => document.getElementById('about-service')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-600 text-gray-700 bg-white/90 px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-gray-600 hover:text-white transition-all cursor-pointer whitespace-nowrap text-center w-full sm:w-auto"
                >
                  サービス詳細を見る
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-gray-600 text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
