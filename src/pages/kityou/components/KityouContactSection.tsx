export default function KityouContactSection() {
  return (
    <section className="py-12 lg:py-16 bg-teal-500">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">無料相談受け付けます</h2>
          <p className="text-teal-100 text-sm">ご不明な点はお気軽にご質問ください</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-5">

          {/* LINE */}
          <a
            href="https://lin.ee/q4plNex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-[#06C755] hover:opacity-90 transition-opacity rounded-2xl p-8 text-center cursor-pointer"
          >
            <p className="text-sm font-semibold text-white mb-2">まずは気軽に相談</p>
            <div className="w-12 h-px bg-white/30 mb-2"></div>
            <p className="text-2xl font-black text-white">LINEで相談する</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
                <i className="ri-line-fill text-white text-lg"></i>
              </span>
              <div className="text-left">
                <p className="text-xs text-white font-semibold">今すぐ簡単無料相談</p>
                <p className="text-xs text-green-100">24時間受付中</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}