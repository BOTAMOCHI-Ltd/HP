import { Link } from 'react-router-dom';

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col">
      {/* Simple header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-center">
          <span className="text-base font-semibold tracking-widest text-gray-800 uppercase">
            BOTAMOCHI
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md space-y-8">
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-gray-900 rounded-full">
            <i className="ri-check-line text-white text-2xl"></i>
          </div>

          {/* Text */}
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              送信が完了しました
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              お申し込みいただきありがとうございます。<br />
              内容を確認の上、担当者よりご連絡いたします。<br />
              今しばらくお待ちください。
            </p>
          </div>

          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors border border-gray-200 rounded-full px-6 py-2.5 bg-white hover:border-gray-400 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-arrow-left-line text-xs"></i>
            トップページに戻る
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <p className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} BOTAMOCHI, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
