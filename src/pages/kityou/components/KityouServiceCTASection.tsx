import { Link } from 'react-router-dom';

const reasons = [
  {
    num: '01',
    title: '領収書何枚でも!\n追加料金ゼロの定額無制限',
    desc: '仕訳数や領収書の枚数が増えても、料金は一切変わりません。月9,800円(税込)の定額制なので、事業が急成長して領収書が倍増しても予算が狂いません。他のサービスでよくある「超過料金」の心配がなく、安心して丸投げできます。'
  },
  {
    num: '02',
    title: '国税調査官監修で\n仕分け・記帳ミスを最小化',
    desc: 'すべての記帳業務に国税調査官が監修に入ります。仕訳の勘定科目チェック、青色申告対応の要件確認まで、プロの目でしっかり確認。「ミスが怖い」「税務署からの連絡が不安」という悩みを根本から解消します。'
  },
  {
    num: '03',
    title: '日本全国どこでもOK!\n郵送かスマホで完結',
    desc: '日本全国どこにお住まいでも同じサービスをご利用いただけます。領収書はレターパックで郵送、またはスマホで撮影してアップロードするだけ。地方在住の方、離島の方も、品質が変わることなくご利用可能です。'
  },
  {
    num: '04',
    title: '主要の会計ソフトに対応',
    desc: 'お客様がお使いの会計ソフトに合わせて記帳します。freee、Money Forwardクラウド、弥生会計など人気のソフトに対応。導入済みのソフトをそのまま使えるので、データ移行の手間がありません。'
  },
  {
    num: '05',
    title: 'オプションで確定申告も\n丸投げで経理をラクに',
    desc: '提携税理士をご紹介し確定申告まで丸ごとお任せ。記帳代行だけじゃなく、青色申告の帳簿整備、決算書下書き、控除項目チェックまで対応。申告期のストレスを大幅に軽減し、節税メリットを最大限に活かせます。いつでもお申込み可能。'
  },
  {
    num: '06',
    title: 'AI任せじゃない\n手動確認+手入力を徹底',
    desc: '最近はAI自動入力のサービスも増えていますが、当社ではすべてスタッフが手入力し、複数回チェックを行っています。「AIだと勘定科目がズレる」「細かいニュアンスが抜ける」といった不安を解消するため、人の目と手による正確性を重視。'
  },
];

const services = [
  {
    num: 'Service01',
    title: '領収書の仕訳入力',
    icon: 'https://storage.googleapis.com/studio-design-asset-files/projects/wQOV5zYXWD/s-80x80_webp_6bbd20b0-670d-4372-9942-783f31dffb92.webp',
    desc: '飲食費、交通費、消耗品、広告費など、事業に関わるすべての領収書・レシートを会計ソフトに正確に入力。勘定科目・補助科目まで適切に振り分け',
  },
  {
    num: 'Service02',
    title: '通帳明細の入力',
    icon: 'https://storage.googleapis.com/studio-design-asset-files/projects/wQOV5zYXWD/s-80x80_webp_c1511764-bdc9-4c51-a6fb-3854fa08b305.webp',
    desc: '事業用銀行口座の入出金(通帳コピーまたはオンラインデータ)をすべて反映。自動入金・振込手数料なども漏れなく処理します。',
  },
  {
    num: 'Service03',
    title: '請求書の入力',
    icon: 'https://storage.googleapis.com/studio-design-asset-files/projects/wQOV5zYXWD/s-80x80_webp_389a5566-c7cd-4961-9f1a-3a3c3d28acbd.webp',
    desc: '発行した請求書(売上)と受け取った請求書(仕入れ)を基に、売掛・買掛の仕訳を正確に計上。入金・支払い消込も対応します。',
  },
  {
    num: 'Service04',
    title: '現金出納帳の入力',
    icon: 'https://storage.googleapis.com/studio-design-asset-files/projects/wQOV5zYXWD/s-80x80_webp_15a68b1c-53bf-4c91-994f-4af85bf28213.webp',
    desc: '現金取引(小口現金など)の入出金を記録。現金残高の整合性も確認し、ズレがないように調整します。',
  },
  {
    num: 'Service05',
    title: '月次試算表の作成・共有',
    icon: 'https://storage.googleapis.com/studio-design-asset-files/projects/wQOV5zYXWD/s-80x80_webp_623803e4-1f6b-46f7-970e-b4b0ba1cbbd5.webp',
    desc: '毎月締め処理後、損益計算書・貸借対照表の試算表を作成し、共有します。お客様にはいつでも確認していただけます。',
  },
  {
    num: 'Service06',
    title: '税理士監修のチェック',
    icon: 'https://storage.googleapis.com/studio-design-asset-files/projects/wQOV5zYXWD/s-80x80_webp_8f468408-360b-4469-9367-083ddf6dbc6e.webp',
    desc: '入力した仕訳を最終確認。青色申告対応の要件や勘定科目の適正をチェックします。',
  },
];

export default function KityouServiceCTASection() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Intro Block */}
        <div className="bg-teal-50 rounded-2xl p-6 lg:p-10 border border-teal-100 mb-12">
          <div className="text-center mb-6">
            <p className="text-sm font-bold text-teal-600 mb-2">記帳代行は記帳コンシェルジュにお任せ!</p>
            <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src={`${import.meta.env.BASE_URL}images/compressed_--1-8bb61a.webp`}
                alt="記帳コンシェルジュ"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-teal-600 mb-2">領収書何枚でも月額9,800円(税込)、安心丸投げ！</h4>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                記帳コンシェルジュは<br />
                事業者様の代わりに仕分け・記帳業務を丸っと代行します
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                領収書や請求書、通帳の取引明細を送るだけで、専門スタッフが会計ソフトへの入力から試算表の作成まで対応します。<br />
                月額9,800円(税込)の定額制で、仕訳数や資料枚数を気にすることなく利用可能。資料は郵送・オンラインのどちらでも提出できるため、手間なく経理業務を任せられます。さらに、元国税調査官監修のチェック体制により、正確で安心できる記帳を実現。経理に費やす時間や入力ミスの不安を減らし、本業に集中できる環境づくりをサポートします。
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
              >
                詳しく見る
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Reasons */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
            記帳代行で記帳コンシェルジュが<br />
            <span className="text-teal-500">選ばれる理由</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r) => (
            <div key={r.num} className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col">
              <div className="p-5 flex-1">
                <span className="text-xs font-bold text-teal-500 mb-2 block">{r.num}</span>
                <h3 className="text-base font-black text-gray-900 mb-3 whitespace-pre-line leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}