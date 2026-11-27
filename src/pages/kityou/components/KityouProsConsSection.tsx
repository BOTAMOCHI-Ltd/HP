export default function KityouProsConsSection() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* メリット・デメリット */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">記帳代行を利用するメリット・デメリット</h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-8"></div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_c3f41c04-2d9c-4d07-8136-880a14a90b23-8a7f97.webp`}
                alt="メリットデメリット"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-loose">
              記帳代行は、「経理が楽になる」「面倒な作業を任せられる」といったイメージから利用を検討する方が増えています。しかし、メリットだけを見て契約すると、「期待していたサービスと違った」と感じるケースもあります。どんなサービスにも長所と短所があるため、事前に両方を理解したうえで、自分の事業や経理体制に合っているかを判断することが大切です。ここでは、個人事業主やフリーランスが知っておきたい記帳代行のメリットと注意点について解説します。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-6">
            記帳代行の大きな魅力は、経理業務に費やしていた時間を大幅に削減できることです。
            <br /><br />
            領収書やレシートの整理、勘定科目の選定、会計ソフトへの入力などは、慣れていない方ほど時間と手間がかかります。これらの作業を専門家へ任せることで、本業に集中できる時間を確保しやすくなります。
            <br />
            また、帳簿の精度が向上する点も大きなメリットです。
            <br />
            自己流で処理を進めると、勘定科目の選択ミスや経費の計上漏れが起こりやすく、確定申告のタイミングで修正作業が必要になることもあります。専門知識を持つスタッフや税理士監修の体制で記帳されるサービスであれば、より正確な帳簿を維持しやすくなります。
            <br />
            さらに、毎月の試算表が作成されることで、事業の状況を数字で把握できるようになる点もメリットの一つです。
            <br />
            売上や利益の推移、経費の増減などを定期的に確認できるため、経営状況を客観的に把握しやすくなり、今後の事業運営や資金計画にも役立ちます。
            <br />
            加えて、近年導入されたインボイス制度や電子帳簿保存法への対応がしやすくなることも見逃せません。制度の内容を一から理解しなくても、ルールに沿った記帳が行われるため、知らないうちに不適切な処理をしてしまうリスクを抑えられます。
          </p>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            一方で、記帳代行には事前に理解しておきたいポイントもあります。
            <br /><br />
            まず注意したいのが費用面です。サービスによって料金体系は異なり、仕訳件数に応じて料金が変動するプランや、月額料金に上限件数が設けられているプランでは、取引が増えた月に追加費用が発生することがあります。そのため、契約前には料金の仕組みをしっかり確認しておくことが重要です。
            <br /><br />
            また、依頼する会社によってサービス品質に差がある点にも注意が必要です。
            <br /><br />
            AIによる自動入力が中心で人による確認が十分に行われていないサービスでは、勘定科目の誤りや入力ミスが見逃されるケースもあります。安心して任せるためには、「誰が記帳内容を確認するのか」「どのようなチェック体制になっているのか」を事前に確認しておくと安心です。
            <br /><br />
            さらに、記帳代行は基本的に帳簿を作成するサービスであり、税務相談や節税対策まで対応しているとは限りません。
            <br /><br />
            税金に関するアドバイスや確定申告までまとめて依頼したい場合は、税理士と提携しているサービスか、税務サポートのオプションが用意されているかを事前に確認しておくことをおすすめします。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">記帳代行のメリット</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  経理に使っていた時間を本業に回せる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  勘定科目の判断に悩まなくなる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  毎月の売上・利益が把握できる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  確定申告前に焦らなくなる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  経費漏れや入力ミスの不安が減る
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">記帳代行のデメリット</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  料金体系によっては想定より高くなる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  業者によって記帳の質に差がある
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  税務相談は別途必要
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  書類を預けるため情報管理が重要
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 向いていない人 */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">記帳代行を利用する際によくある失敗・トラブルとは？</h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-8"></div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_c3f41c04-2d9c-4d07-8136-880a14a90b23-8a7f97.webp`}
                alt="向いていない人"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-loose">
              記帳代行は、経理業務の負担を大きく軽減できる便利なサービスですが、サービス選びを誤ると「思っていた内容と違った」と後悔してしまうケースもあります。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-loose">
            実際に起こるトラブルの多くは、契約前に料金やサービス内容を十分に確認していなかったことが原因です。ここでは、記帳代行を利用する際によくある失敗例と、その対策についてご紹介します。
            <br /><br />
            代表的なトラブルの一つが、想定以上の追加料金が発生するケースです。
            <br /><br />
            記帳代行サービスの中には、仕訳件数や取引数に応じて料金が加算されるプランや、「○件まで月額料金に含まれる」といった料金体系を採用しているところがあります。
            <br /><br />
            そのため、取引量や領収書が増えた月には追加費用が発生し、毎月のコストが予想以上に膨らんでしまうことがあります。特に事業が成長して取引件数が増えている方ほど、このようなケースに遭遇しやすい傾向があります。
            <br /><br />
            記帳の精度に関するトラブルも少なくありません。
            <br /><br />
            AIによる自動入力を中心としていて人による確認が十分に行われていないサービスや、担当者ごとに処理方法が統一されていない業者では、勘定科目の選択ミスや入力漏れが発生する可能性があります。
            <br /><br />
            その結果、確定申告の直前になって帳簿を修正しなければならず、余計な時間や手間がかかってしまうケースもあります。
            <br /><br />
            必要書類の提出ルールが明確でないことも、よくあるトラブルの一つです。
            <br /><br />
            「追加でこの資料が必要です」「提出形式が異なります」と何度も確認や再提出を求められると、やり取りが増え、結果として経理業務の負担が減らないこともあります。
            <br /><br />
            スムーズに利用するためには、どの書類を、どの方法で提出すればよいのかが事前に明確になっているサービスを選ぶことが大切です。
            <br /><br />
            こうした失敗を防ぐためには、契約前にサービス内容をしっかり確認することが重要です。
            <br /><br />
            特に、「追加料金が発生する条件は何か」「記帳内容をどのような体制でチェックしているか」「書類の提出方法や運用ルールが分かりやすく案内されているか」といった点は必ず確認しておきましょう。
            <br /><br />
            料金体系が明確で、品質管理やサポート体制が整っている記帳代行サービスを選ぶことで、安心して経理業務を任せることができます。
          </p>
        </div>

      </div>
    </section>
  );
}