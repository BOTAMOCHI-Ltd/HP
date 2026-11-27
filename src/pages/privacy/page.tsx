import { Link } from 'react-router-dom';

export default function PrivacyPage() {
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
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">プライバシーポリシー</h1>
            <p className="text-sm text-gray-400">最終更新日：2026年4月1日</p>
          </div>

          {/* Intro */}
          <div className="mb-10 text-sm text-gray-600 leading-relaxed">
            <p>
              株式会社BOTAMOCHI（以下「当社」といいます。）は、利用者の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、個人情報の保護に努めます。
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">

            {/* 1 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">1. 個人情報の定義</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できるものをいいます。
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">2. 個人情報の収集方法</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社は、利用者がサービスの利用申込みをする際に、以下の個人情報をお聞きすることがあります。
                </p>
                <ul className="mt-2 space-y-2 pl-2">
                  {[
                    '氏名、生年月日、住所、電話番号、メールアドレス',
                    '勤務先情報、雇用形態、退職予定日',
                    '健康保険・雇用保険に関する情報',
                    'その他、サービス提供に必要な情報',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">3. 個人情報の利用目的</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社が個人情報を収集・利用する目的は、以下のとおりです。
                </p>
                <ul className="mt-2 space-y-2 pl-2">
                  {[
                    '（1）本サービスの提供・運営のため',
                    '（2）利用者からのお問い合わせに回答するため',
                    '（3）給付金の受給額シミュレーション・診断のため',
                    '（4）申請書類の作成サポートのため',
                    '（5）メンテナンス、重要なお知らせなど必要に応じたご連絡のため',
                    '（6）利用規約に違反した利用者への対応のため',
                    '（7）本サービスの改善・新サービスの開発のため',
                    '（8）上記の利用目的に付随する目的',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">4. 個人情報の第三者提供</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社は、次に掲げる場合を除いて、あらかじめ利用者の同意を得ることなく、第三者に個人情報を提供することはありません。
                </p>
                <ul className="mt-2 space-y-2 pl-2">
                  {[
                    '（1）法令に基づく場合',
                    '（2）人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき',
                    '（3）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき',
                    '（4）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">5. 個人情報の安全管理</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  個人情報の滅失、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">6. 個人情報の開示・訂正・削除</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  利用者は、当社が保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、個人情報の訂正、追加または削除（以下「訂正等」といいます。）を請求することができます。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社は、利用者から前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これを利用者に通知します。
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">7. Cookieの使用について</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社のウェブサイトでは、利用者の利便性上およびサービス改善のためにCookieを使用する場合があります。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cookieとは、ウェブサイトがお客様のコンピュータに送信する小さなテキストファイルです。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  利用者はブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、一部のサービスが利用できなくなることがあります。
                </p>
              </div>
            </div>

            {/* 8 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">8. アクセス解析ツールについて</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社のウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用する場合があります。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                </p>
              </div>
            </div>

            {/* 9 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">9. プライバシーポリシーの変更</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、利用者に通知することなく変更することができるものとします。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                </p>
              </div>
            </div>

            {/* 10 */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-base font-bold text-gray-800 mb-4">10. お問い合わせ窓口</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <ul className="mt-2 space-y-2 pl-2">
                  {[
                    '会社名：株式会社BOTAMOCHI',
                    'サービス名：記帳コンシェルジュ',
                    'お問い合わせ方法：LINEまたは当社ウェブサイトのお問い合わせフォームよりご連絡ください。',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
                to="/scta"
                className="inline-flex items-center space-x-1 text-sm text-emerald-600 hover:text-emerald-700 underline underline-offset-2 transition-colors cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-links-line text-sm"></i>
                </div>
                <span>特定商取引法に基づく表記</span>
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
