export default function MainAboutSection() {
  return (
    <section id="about-service" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            <a href="#about-service" className="hover:text-emerald-600 transition-colors">
              BOTAMOCHIの記帳コンシェルジュ
            </a>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              事業者様の代わりに仕分け・記帳業務を代行！
              領収書、通帳コピー、請求書を丸投げするだけで、
              プロが会計ソフト入力し試算表を出力。
              月額9,800円(税込)定額で無制限対応。
              郵送・オンライン提出で手間ゼロ、正確安心！
            </p>
          </div>
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                alt="BOTAMOCHIの記帳コンシェルジュ"
                title="BOTAMOCHIの記帳コンシェルジュ"
                className="w-full h-auto block"
                src={`${import.meta.env.BASE_URL}images/compressed-f7d939.webp`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}