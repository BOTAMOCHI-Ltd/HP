import { Link } from 'react-router-dom';

interface SctaRow {
  label: string;
  content: string;
  isLast?: boolean;
}

const sctaRows: SctaRow[] = [
  { label: '事業者名', content: '株式会社BOTAMOCHI' },
  { label: '所在地', content: '〒150-0044\u00a0東京都渋谷区円山町5番3号' },
  { label: '電話番号', content: '090-9325-1227' },
  { label: 'メールアドレス', content: 'support@botamochi.co.jp' },
  { label: 'サービス名', content: '記帳コンシェルジュ' },
  {
    label: 'サービス内容',
    content: '個人事業主様向けの記帳代行サービス',
  },
  {
    label: '販売価格・利用料金',
    content: '一人当たり、月々9,800円(税込)~',
  },
  {
    label: '支払方法',
    content: '銀行振込、クレジットカード決済、口座振替',
  },
  {
    label: '支払時期',
    content: '詳細は契約時にご案内いたします。',
  },
  {
    label: 'サービス提供時期',
    content: 'お申込み完了後、速やかにサービスを開始いたします。',
  },
  {
    label: 'キャンセル・返金について',
    content: 'サービス開始後のキャンセルについては、進捗状況に応じて個別に対応いたします。詳細は契約書面をご確認ください。',
  },
  {
    label: '動作環境',
    content: 'オンライン面談にはZoomまたはGoogle Meet等のビデオ通話環境が必要です。LINEでのご相談にはLINEアプリが必要です。',
    isLast: true,
  },
];

export default function SctaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                alt="退職給付金サポート ロゴ"
                title="退職給付金サポート"
                className="h-16 w-auto object-contain scale-150"
                src={`${import.meta.env.BASE_URL}images/2-68c187.png`}
              />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center space-x-1 text-sm text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-s-line text-base"></i>
              </div>
              <span>トップページに戻る</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">

          {/* Title */}
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">特定商取引法に基づく表記</h1>
            <p className="text-sm text-gray-400">最終更新日：2026年4月1日</p>
          </div>

          {/* Section heading */}
          <h2 className="text-base font-bold text-gray-700 mb-5">事業者情報および取引条件</h2>

          {/* Table */}
          <div className="rounded-lg overflow-hidden border border-gray-200">
            {sctaRows.map((row) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row ${!row.isLast ? 'border-b border-gray-200' : ''}`}
              >
                <div className="sm:w-48 flex-shrink-0 bg-gray-50 px-5 py-4 flex items-start">
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{row.label}</span>
                </div>
                <div className="flex-1 px-5 py-4 bg-white">
                  <p className="text-sm text-gray-600 leading-relaxed">{row.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
            <p className="text-xs text-gray-600 leading-relaxed">
              ※ 上記の情報は変更になる場合があります。最新情報はお問い合わせにてご確認ください。
            </p>
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-gray-100 text-right">
            <p className="text-sm text-gray-500">2026年4月1日 制定</p>
            <p className="text-sm text-gray-500 mt-1">株式会社BOTAMOCHI</p>
          </div>

          {/* Related pages */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">関連ページ</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/privacy-policy"
                className="inline-flex items-center space-x-1 text-sm text-emerald-600 hover:text-emerald-700 underline underline-offset-2 transition-colors cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-links-line text-sm"></i>
                </div>
                <span>プライバシーポリシー</span>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center space-x-1 text-sm text-emerald-600 hover:text-emerald-700 underline underline-offset-2 transition-colors cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-links-line text-sm"></i>
                </div>
                <span>トップページ</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 text-white mt-16">
        <div className="px-6 lg:px-12 py-10">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-xs">© 2026 株式会社BOTAMOCHI. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 text-xs hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap"
                >
                  プライバシーポリシー
                </Link>
                <Link
                  to="/scta"
                  className="text-gray-300 text-xs hover:text-emerald-300 transition-colors cursor-pointer whitespace-nowrap"
                >
                  特定商取引法に基づく表記
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
