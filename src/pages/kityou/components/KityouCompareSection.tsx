export default function KityouCompareSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* 記帳代行と経理代行は何が違う？ */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">記帳代行と経理代行は何が違う？</h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-8"></div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_c3f41c04-2d9c-4d07-8136-880a14a90b23-8a7f97.webp`}
                alt="経理代行との違い"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-loose">
              「記帳代行」と「経理代行」は、どちらも経理業務を外部へ依頼できるサービスですが、実際には対応する業務内容や利用に適した事業者が異なります。その違いを把握しないまま依頼すると、「必要のないサービスまで契約してしまった」「想像以上に費用がかかった」といったケースも起こり得ます。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            記帳代行は、日々の取引を帳簿へ正確に記録する「記帳業務」を専門に行うサービスです。一方で経理代行は、記帳だけでなく、請求書の発行や支払い手続き、給与計算、年末調整など、経理業務全般を幅広くサポートします。
            <br /><br />
            対応範囲が広い分、経理代行は費用も高くなる傾向があり、月額数万円から十数万円程度になることも少なくありません。
            <br />< br/>
            一方、個人事業主やフリーランスの場合、経理業務すべてを外注する必要があるケースはそれほど多くありません。
            <br />< br/>
            「領収書やレシートを整理して帳簿を作成してほしい」「確定申告に向けて正確な記帳をしておきたい」といったニーズであれば、記帳代行だけで十分対応できる場合がほとんどです。
            <br />< br/>
            そのため、経理業務全体をアウトソーシングしたい法人には経理代行が適しており、日々の記帳作業だけを効率よく任せたい個人事業主やフリーランスには記帳代行が向いているといえるでしょう。
            <br />< br/>
            それぞれのサービス内容を理解し、自社や自身の事業規模・必要な業務に合わせて選ぶことが、無駄なコストを抑えながら経理を効率化するポイントです。
            < br/>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">記帳代行で行うこと</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  領収書・請求書を帳簿にまとめる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  毎月の経理を"整った状態"にする
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  確定申告や決算の準備をラクにする
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">経理代行で行うこと</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  請求書の発行・送付
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  取引先への支払い管理
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  給与計算・社会保険手続き
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  経理業務全般の実務代行
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 記帳代行と顧問税理士の違いをわかりやすく解説 */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">記帳代行と顧問税理士の違いをわかりやすく解説</h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-8"></div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_c3f41c04-2d9c-4d07-8136-880a14a90b23-8a7f97.webp`}
                alt="顧問税理士との違い"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-loose">
              「税理士に依頼すれば、記帳作業もすべて任せられるのでは？」と考える方は少なくありません。しかし実際には、記帳代行と顧問税理士では担当する役割が異なり、提供されるサービス内容にも大きな違いがあります。
              <br />
              この違いを理解しないまま契約してしまうと、「帳簿の入力までやってもらえると思っていた」「想定していたサポートが含まれていなかった」といったミスマッチにつながる可能性があります。
              <br />
              ここでは、それぞれの業務内容や特徴、費用の違いを整理し、どのように使い分けるのが適しているのかを解説します。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            顧問税理士は、税務に関する専門家として、税金に関する相談や確定申告書・決算書の作成、税務署への対応などを主な業務としています。
            <br /><br />
            節税対策のアドバイスや税制改正への対応、税務調査時のサポートなど、専門知識や判断が必要な場面で力を発揮するのが顧問税理士の役割です。
            <br /><br />
            一方で、日々発生する記帳作業については、利用者自身が作成した帳簿を確認・チェックすることを前提としている税理士事務所も多くあります。
            <br /><br />
            そのため、領収書やレシートの整理、仕訳入力まで依頼したい場合は、記帳代行を追加オプションとして契約する必要があり、別途費用が発生するケースが一般的です。
          </p>

          <h3 className="text-lg md:text-xl font-bold text-gray-900">記帳代行の役割</h3>
          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            記帳代行は、日々発生する取引を正確に帳簿へ反映することを専門としたサービスです。
            <br /><br />
            領収書やレシート、請求書、銀行口座の入出金明細などをもとに、適切な勘定科目で仕訳を行い、会計ソフトへ入力します。
            <br /><br />
            さらに、現金や預金残高との照合、帳簿の整合性確認、月次試算表の作成まで対応するサービスも多く、毎月の経理を正確な状態で維持する役割を担っています。
            <br /><br />
            つまり、記帳代行は申告や税務判断を行うための「土台となる帳簿」を作成する専門サービスといえます。
          </p>

          <h3 className="text-lg md:text-xl font-bold text-gray-900">両者を組み合わせるのが理想的</h3>
          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            両者の違いをシンプルに表現すると、顧問税理士は「税務上の判断や申告を担当する専門家」、記帳代行は「その判断に必要な帳簿を作成する専門家」と考えるとイメージしやすいでしょう。
            <br /><br />
            そのため、効率的な経理体制を整えるには、記帳代行と顧問税理士を組み合わせて利用する方法が効果的です。
            <br /><br />
            毎月の記帳を記帳代行へ任せることで、正確な帳簿を継続的に作成でき、その帳簿をもとに税理士が確定申告や税務相談を行えば、修正作業や確認の手間を減らし、結果として時間やコストの削減にもつながります。
            <br /><br />
            近年では、税理士が監修する記帳代行サービスも増えており、記帳の段階から税務面を意識したチェックを受けられるケースもあります。
            <br /><br />
            「税理士へすべて依頼するほどの費用はかけられない」「とはいえ、自分だけで記帳するのは不安」という個人事業主やフリーランスにとって、こうしたサービスは費用と安心感のバランスが取れた選択肢となっています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">顧問税理士が主に行うこと</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  確定申告書・決算書の作成
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  節税の相談・税務判断
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  税務署からの問い合わせ対応
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-500 text-white rounded-full text-xs">
                  <i className="ri-check-line"></i>
                </span>
                <h3 className="text-base font-bold text-gray-900">記帳代行が行うこと</h3>
              </div>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  毎日の取引を帳簿に正しく入力
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  税理士が判断しやすい帳簿を作る
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 料金相場比較 */}
        <div>
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">記帳代行・経理代行・顧問税理士の費用相場を比較</h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-8"></div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_c3f41c04-2d9c-4d07-8136-880a14a90b23-8a7f97.webp`}
                alt="料金相場"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-loose">
              経理業務を外部へ依頼することを考えたとき、「どのサービスが自分に合っているのか」「実際にどのくらいの費用が必要なのか」と悩む方は少なくありません。記帳代行・経理代行・顧問税理士は、いずれも経理や税務をサポートするサービスですが、それぞれ対応できる業務や料金体系には大きな違いがあります。
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            ここでは、個人事業主やフリーランスの方が比較しやすいように、各サービスの費用相場や特徴、どのような方に向いているのかを整理してご紹介します。料金だけで判断するのではなく、「どこまで対応してもらえるのか」という点もあわせて確認することが大切です。
            <br /><br />
            記帳代行は、領収書やレシート、請求書、銀行口座の入出金明細などをもとに仕訳を行い、会計ソフトへの入力や帳簿・試算表の作成を行うサービスです。
            <br /><br />
            費用の目安は月額15000円〜40,000円程度が一般的ですが、多くのサービスでは仕訳件数や取引数に上限が設定されています。そのため、取引量が増えると追加料金が発生し、想定よりも費用が高くなるケースもあります。
            <br /><br />
            料金を比較する際は、月額料金だけを見るのではなく、基本料金に含まれる仕訳件数やサービス内容まで確認しておくことが重要です。
          </p>

          <p className="text-sm md:text-base text-gray-600 leading-loose mb-8">
            経理代行は、記帳業務だけでなく、請求書の作成・発行、支払い管理、給与計算など、経理業務全般を代行するサービスです。
            <br /><br />
            その分、費用は高くなる傾向があり、月額5万円以上が一般的な相場となっています。依頼する業務内容や会社の規模によっては、月額10万円以上になることも珍しくありません。
            <br /><br />
            社内に経理担当者を配置する代わりとして利用する法人には適していますが、個人事業主やフリーランスの場合は、必要以上のサービスとなり、コストが割高になってしまうケースもあります。
            <br /><br />
            この費用には、税務相談や確定申告書・決算書の作成、税務署への対応などが含まれることが多い一方で、毎日の記帳作業は対象外となっているケースが少なくありません。
            <br /><br />
            そのため、帳簿の入力まで依頼したい場合は、記帳代行を追加オプションとして契約する必要があり、結果としてトータルの費用が高くなることもあります。
            <br /><br />
            ただし、節税に関するアドバイスや税務上の判断、税務調査への対応など、専門的なサポートが必要な場面では、顧問税理士の存在は大きな安心につながります。
            <br /><br />
            この3つのサービスは、それぞれ役割が異なるため、料金だけを比較して選ぶのではなく、自分に必要なサポート内容を基準に判断することが重要です。
            <br /><br />
            日々の帳簿作成や経理負担を軽減したいのであれば記帳代行、経理業務全体を任せたい場合は経理代行、税務相談や申告業務までサポートしてほしい場合は顧問税理士が適しています。
            <br /><br />
            多くの個人事業主やフリーランスにとっては、記帳代行で日常の経理業務を効率化し、必要なタイミングだけ税理士へ相談や申告を依頼する方法が、費用と実用性のバランスを取りやすい選択肢といえるでしょう。
            <br /><br />
            また、コストを抑えながら安心して利用したい場合は、仕訳件数や領収書の枚数に制限がなく、追加料金が発生しない料金体系の記帳代行サービスを選ぶのがおすすめです。
            <br /><br />
            取引件数が増えても費用が変わらないサービスであれば、毎月のコストを気にすることなく、本業に集中しやすい環境を整えることができます。
          </p>

        </div>

      </div>
    </section>
  );
}