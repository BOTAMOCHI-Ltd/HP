import { useState, useEffect } from 'react';

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white shadow-sm'}`}>
      <div className="px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <a className="flex items-center cursor-pointer" href={`${import.meta.env.BASE_URL}`}>
            <img
              alt="記帳コンシェルジュ ロゴ"
              title="記帳コンシェルジュ ロゴ"
              className="h-16 w-auto object-contain scale-150"
              src={`${import.meta.env.BASE_URL}images/2-68c187.png`}
            />
          </a>
          <nav className="hidden lg:flex items-center space-x-7">
            {['about-service', 'support', 'faq', 'company'].map((id, i) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-gray-700 hover:text-emerald-500"
              >
                {['サービス紹介', 'サポート内容', 'よくある質問', '会社概要'][i]}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex flex-col items-center gap-1">
              <span className="text-xs font-semibold whitespace-nowrap">＼まずはLINE追加／</span>
              <a
                href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold px-6 py-2.5 rounded-full text-white bg-[#06C755] hover:opacity-90 transition-opacity cursor-pointer"
              >
                無料で診断
              </a>
            </div>
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-gray-700"
              aria-label="メニューを開く"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-4">
          {['about-service', 'support', 'faq', 'company'].map((id, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-gray-700 hover:text-emerald-500 text-left cursor-pointer"
            >
              {['サービス紹介', 'サポート内容', 'よくある質問', '会社概要'][i]}
            </button>
          ))}
          <a
            href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold px-6 py-3 rounded-full text-white bg-[#06C755] hover:opacity-90 transition-opacity cursor-pointer"
          >
            無料で診断
          </a>
        </div>
      )}
    </header>
  );
}
