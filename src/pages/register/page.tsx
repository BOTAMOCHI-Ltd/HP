export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Simple header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}images/img-cec8bf.png`}
            alt="BOTAMOCHI"
            style={{ height: 48, width: 'auto' }}
          />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-20 sm:pb-24">
        <div className="mb-10 text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            会員登録
          </h1>
          <p className="text-sm text-gray-500">
            会員登録をご希望の方は、メールでお問い合わせください。
          </p>
        </div>

        <div className="text-center"><a className="font-semibold text-gray-900 underline" href="mailto:support@botamochi.co.jp">support@botamochi.co.jp</a></div>
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
