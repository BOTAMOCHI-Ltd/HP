import { Link } from 'react-router-dom';

export default function KityouFooter() {
  return (
    <footer className="bg-teal-700 text-white">

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://lin.ee/q4plNex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-[#06C755] text-white text-sm font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <i className="ri-line-fill text-base"></i>
                LINEで相談
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-sm font-bold text-teal-200 uppercase tracking-wide mb-4">Service</h3>
            <ul className="space-y-2">
              {[
                { label: '料金', href: '/kityou/price' }
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="flex items-center gap-2 text-sm text-teal-100 hover:text-white transition-colors">
                    <i className="ri-arrow-right-s-line text-teal-300"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-teal-200 text-xs">
          Copyright(C)2026 記帳コンシェルジュ. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}