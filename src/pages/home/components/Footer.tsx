import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const legalLinks = [
    { label: '会社概要', href: 'https://botamochi.co.jp', isRouter: false },
    { label: 'プライバシーポリシー', href: '/privacy-policy', isRouter: true },
    { label: '特定商取引法に基づく表記', href: '/scta', isRouter: true },
  ];

  return (
    <footer style={{ backgroundColor: '' }}>
      {/* Main footer */}
      <div className="max-w-[1160px] mx-auto px-6 pt-4 pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Horizontal links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {legalLinks.map((link) =>
              link.isRouter ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-[1160px] mx-auto px-6 py-4 flex items-center justify-center">
          <p className="text-xs text-gray-900">
            &copy; {new Date().getFullYear()} BOTAMOCHI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
