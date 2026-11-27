export default function MainCompanySection() {
  return (
    <section id="company" className="py-24 px-6 lg:px-12 bg-gray-50/50" aria-label="株式会社BOTAMOCHI 会社概要">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-4">COMPANY</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            <a href="#company" className="hover:text-emerald-600 transition-colors">会社概要</a>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            株式会社BOTAMOCHIのスタッフが丁寧にサポートいたします。
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full" aria-label="株式会社BOTAMOCHI 基本情報">
            <tbody>
              {[
                { label: '会社名', value: '株式会社BOTAMOCHI' },
                { label: '所在地', value: '〒150-0044 東京都渋谷区円山町5番3号' },
                { label: '事業内容', value: '個人事業主様向けの経理代行' },
                { label: 'お問い合わせ', value: 'support@botamochi.co.jp' },
              ].map((row, i, arr) => (
                <tr key={row.label} className={i < arr.length - 1 ? 'border-b border-gray-50' : ''}>
                  <td className="px-6 py-5 text-sm font-medium text-gray-700 bg-gray-50/50 w-40 whitespace-nowrap">{row.label}</td>
                  <td className="px-6 py-5 text-sm text-gray-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
