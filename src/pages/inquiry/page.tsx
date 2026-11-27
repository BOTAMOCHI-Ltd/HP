import InquiryForm from './components/InquiryForm';

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-center">
          <a href={`${import.meta.env.BASE_URL}`}>
            <img
              src={`${import.meta.env.BASE_URL}images/img-cec8bf.png`}
              alt="BOTAMOCHI"
              style={{ height: 48, width: 'auto' }}
            />
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-20 sm:pb-24">
        <div className="mb-10 text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            お問い合わせ
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            以下のフォームにご入力の上、「問い合わせる」ボタンを押してください。<br />
            担当者より当日〜2営業日以内にご連絡いたします。
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 px-6 sm:px-10 py-8 sm:py-10">
          <InquiryForm />
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
