import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  const [isMailHovered, setIsMailHovered] = useState(false);
  return (
    <aside
      id="contact"
      className="py-16"
      style={{ backgroundColor: '#faefcf' }}
    >
      <div className="max-w-[1160px] mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          まずは気軽にお問い合わせください
        </h2>
        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
          具体的な料金・導入スケジュールについて、お客様のご状況に合わせて専任担当者がご案内いたします
        </p>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#00C854' }}>＼まずはLINE追加／</span>
          <a
            href="https://liff.line.me/2009766662-9LGTedUk/landing?follow=%40049yoplb&lp=O1tlqF&liff_id=2009766662-9LGTedUk"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold px-8 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00C854', boxShadow: '0 4px 14px rgba(0, 200, 84, 0.45)', minWidth: 200 }}
          >
            無料で診断
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">LINEをお持ちでない方はこちら</span>
          <Link
            to="/inquiry"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold px-8 py-3 rounded-full border-2 transition-colors cursor-pointer"
            style={{ borderColor: '#333', color: '#333', minWidth: 200, backgroundColor: isMailHovered ? '#ffffff' : 'transparent' }}
            onMouseEnter={() => setIsMailHovered(true)}
            onMouseLeave={() => setIsMailHovered(false)}
          >
            <i className="ri-mail-line text-base"></i>
            メールでのお問い合わせはこちらから
          </Link>
        </div>
      </div>
    </aside>
  );
}
