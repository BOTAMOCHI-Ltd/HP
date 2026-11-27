import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function KityouNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'サービス内容', href: '/kityou' },
    { label: '料金', href: '/kityou/price' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/compressed_--1-8bb61a.webp`}
              alt="記帳コンシェルジュ"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:text-teal-500 ${
                  location.pathname === link.href
                    ? 'text-teal-500 border-b-2 border-teal-500 pb-0.5'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}