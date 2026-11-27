import { Link } from "react-router-dom";

const steps = [
  {
    num: '01',
    icon: 'ri-smartphone-line',
    title: 'LINEで無料相談',
    desc: 'いくつかの質問に答えるだけで、あなたが得する金額の目安がすぐにわかります!',
  },
  {
    num: '02',
    icon: 'ri-customer-service-2-line',
    title: '代行サポートお申し込み',
    desc: 'LINE上でお申し込みをお願いします。',
  },
  {
    num: '03',
    icon: 'ri-file-edit-line',
    title: '代行スタート',
    desc: '事業者様の代わりに仕分け・記帳業務を代行！',
  },
];

export default function MainSupportSection() {
  return (
    <section id="support" className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-4">SUPPORT</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            <a href="#support" className="hover:text-emerald-600 transition-colors">サポート内容</a>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed mb-6">
            弊社がトータルでサポートします。
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/kityou"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold text-sm rounded-full hover:bg-emerald-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>詳細を見る</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link
              to="/kityou/price"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold text-sm rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>料金を見る</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col lg:flex-row items-stretch bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500">
              <div className="lg:w-24 flex-shrink-0 bg-gradient-to-b from-gray-700 to-gray-800 flex items-center justify-center py-4 lg:py-0">
                <span className="text-3xl font-bold text-white/90">{step.num}</span>
              </div>
              <div className="flex-1 p-6 lg:p-8 flex items-start space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <i className={`${step.icon} text-2xl text-emerald-600`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}