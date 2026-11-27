import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top sub-nav */}

      {/* Main nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1160px] mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href={`${import.meta.env.BASE_URL}`} onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <img
              src={`${import.meta.env.BASE_URL}images/2026-04-23-13-59-20-d03aca.png`}
              alt="ゼロ福利"
              style={{ height: 64, width: 'auto' }}
            />
          </a>

          {/* Nav links + buttons */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-semibold whitespace-nowrap" style={{ color: '#00C854' }}>＼まずはLINE追加／</span>
              <a
                href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
                className="inline-flex items-center whitespace-nowrap text-sm font-bold px-5 py-2.5 rounded-full text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00C854', boxShadow: '0 4px 14px rgba(0, 200, 84, 0.45)' }}
              >
                無料で診断
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
