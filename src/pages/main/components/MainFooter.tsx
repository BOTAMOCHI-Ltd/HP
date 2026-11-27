export default function MainFooter() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-700 text-white">
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-200 text-sm hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap">TOP</button>
              <button type="button" onClick={() => scrollTo('about-service')} className="text-gray-200 text-sm hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap">サービス紹介</button>
              <button type="button" onClick={() => scrollTo('support')} className="text-gray-200 text-sm hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap">サポート内容</button>
              <button type="button" onClick={() => scrollTo('faq')} className="text-gray-200 text-sm hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap">よくある質問</button>
              <button type="button" onClick={() => scrollTo('company')} className="text-gray-200 text-sm hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap">会社概要</button>
            </nav>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-300 text-xs">© 2026 株式会社BOTAMOCHI. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href={`${import.meta.env.BASE_URL}privacy-policy`} className="text-gray-300 text-xs hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap">プライバシーポリシー</a>
              <a href={`${import.meta.env.BASE_URL}scta`} className="text-gray-300 text-xs hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap">特定商取引法に基づく表記</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
