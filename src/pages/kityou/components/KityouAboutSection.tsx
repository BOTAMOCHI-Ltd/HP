export default function KityouAboutSection() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* Section 1: サービス内容を基礎からわかりやすく解説 */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">サービス内容を基礎からわかりやすく解説</h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-8"></div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-28 md:w-24 md:h-32 shrink-0 rounded-xl overflow-hidden bg-white shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_c3f41c04-2d9c-4d07-8136-880a14a90b23-8a7f97.webp`}
                alt="記帳代行イメージ"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-loose">
              「記帳代行」というサービスの名前は知っていても、実際にどのような業務を任せられるのか、経理代行や税理士との違いまで理解している方は意外と少ないものです。特に個人事業主やフリーランスの場合、本業を優先するあまり経理作業が後回しになり、「レシートや領収書が山積みになっている」「会計ソフトを開いても何から手を付ければいいか分からない」と悩むケースは珍しくありません。こうした経理に関する負担を軽減する手段の一つが、記帳代行サービスです。まずは、どのようなサービスなのか、その役割を確認していきましょう。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            記帳代行とは、日々の事業活動で発生した売上や経費などのお金の流れを、帳簿へ正確に記録する「記帳業務」を専門スタッフが代わりに行うサービスです。<br />依頼者から預かった領収書やレシート、請求書、銀行口座の取引明細などをもとに内容を整理し、適切な勘定科目を選びながら会計ソフトへ仕訳を入力していきます。<br />帳簿は確定申告や決算書を作成する際の土台となるため、この作業にミスや漏れがあると、その後の手続きにも影響を及ぼします。しかし実際には、「どの勘定科目で処理すればよいのか判断できない」「気づけば数か月、あるいは1年分の記帳が溜まってしまった」「入力内容に間違いがないか不安」と感じる方も少なくありません。<br />記帳代行を利用すれば、こうした煩雑な作業を専門家へ任せることができ、毎月の帳簿を正確な状態で維持しやすくなります。<br />また、近年はインボイス制度や電子帳簿保存法への対応も求められるようになり、記帳にはこれまで以上に正確性が必要とされています。単純に数字を入力するだけではなく、ルールに沿って適切に処理されていることが重要視される時代です。<br />そのため記帳代行は、経理にかかる時間を削減するだけでなく、安心して事業に集中できる環境を整えるサービスとして、多くの個人事業主やフリーランスから利用されています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">記帳とは具体的に何をすることか</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  売上が発生した日付・金額・取引内容を帳簿に記録する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  レシートや領収書の内容を確認し、経費として使えるか判断する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  「交通費」「消耗品費」「広告宣伝費」など適切な勘定科目を選ぶ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  会計ソフト(freee・マネーフォワード・弥生など)に仕訳入力する
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  現金・銀行口座それぞれの残高が合っているか確認する
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">正しい確定申告を行う</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  経費計上漏れで税金を払いすぎる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  勘定科目の間違いで税務署から指摘を受ける
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  確定申告前に帳簿を一気に作ることになり大きな負担になる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  売上や利益が把握できず、経営判断が遅れる
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: 記帳代行で対応してもらえる業務範囲とは? */}
        <div>
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">記帳代行ではどこまで依頼できる？<br />対応業務を詳しく紹介</h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-8"></div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_c3f41c04-2d9c-4d07-8136-880a14a90b23-8a7f97.webp`}
                alt="業務範囲イメージ"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-loose">
              「記帳代行」と聞くと、領収書やレシートの内容を会計ソフトへ入力するだけのサービスというイメージを持つ方も多いかもしれません。しかし実際には、それ以上の経理業務に対応しているケースが一般的です。ただし、依頼できる業務の範囲はサービス会社によって異なるため、契約前に対応内容を確認しておくことが大切です。ここでは、多くの記帳代行サービスで対応している代表的な業務をご紹介します。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            まず基本となるのが、領収書やレシート、各種証憑を整理し、内容に応じて適切な勘定科目へ分類したうえで会計ソフトへ仕訳を入力する作業です。飲食代や交通費、消耗品費、広告費など、日々発生する経費を正確に帳簿へ反映していきます。
            <br /><br />
            また、銀行口座の入出金明細を確認し、売上や経費との照合を行うほか、振込手数料などの細かな取引についても適切に処理します。
            <br /><br />
            売上請求書や仕入請求書を発行・受領している事業者であれば、売掛金や買掛金の仕訳入力に加え、入金・支払いの消込業務まで対応しているサービスも少なくありません。
            <br /><br />
            さらに、現金での取引が多い場合には、現金出納帳の作成や現金残高の確認など、日々の現金管理をサポートしてくれるケースもあります。
            <br /><br />
            こうした一連の記帳作業が完了すると、損益計算書や貸借対照表を含む月次試算表を作成し、毎月の経営状況を数字で把握できるようになります。ここまでが、多くの記帳代行サービスで提供されている基本的な業務内容です。
            <br /><br />
            なお、「仕訳代行」や「領収書仕分け代行」といった名称を目にすることがありますが、実際のサービス内容は記帳代行とほぼ同じ意味で使われることが一般的です。
            <br />
          </p>

          <div className="bg-white rounded-xl p-6 border border-teal-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                <i className="ri-check-line"></i>
              </span>
              <h3 className="text-base font-bold text-gray-900">記帳代行で対応する具体的な業務内容</h3>
            </div>
            <div className="w-full h-px bg-gray-100 mb-4"></div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1 shrink-0">•</span>
                飲食代・交通費・消耗品など領収書の仕分けと入力
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1 shrink-0">•</span>
                事業用通帳の入金・出金明細の入力
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1 shrink-0">•</span>
                売上請求書をもとにした売上仕訳
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1 shrink-0">•</span>
                仕入・外注費などの請求書入力
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1 shrink-0">•</span>
                月次試算表(損益計算書・貸借対照表)の作成
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}