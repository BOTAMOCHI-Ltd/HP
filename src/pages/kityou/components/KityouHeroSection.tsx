import { Link } from 'react-router-dom';

export default function KityouHeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-16 lg:pt-20">
        <div
          className="relative w-full h-[280px] md:h-[380px] flex items-center justify-end bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              `url(${import.meta.env.BASE_URL}images/compressed-596bfb.webp)`,
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-right text-white px-6 md:px-12 lg:px-20">
            <h1 className="text-3xl md:text-5xl font-black tracking-wide">サービス内容</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-teal-500 transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">サービス内容</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-relaxed">
            記帳代行とは?<br />
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-loose">
            日々の仕事に追われる中で、「気づけば経理作業が後回しになっている…」ということはありませんか。<br /><br />

領収書やレシートが溜まったまま整理できていない、会計ソフトを開いても勘定科目の入力で手が止まる、そして確定申告が近づいてから慌てて作業を始める。こうした悩みは、多くの個人事業主やフリーランスが一度は経験するものです。<br /><br />

そんな経理の負担を軽減する方法として注目されているのが「記帳代行サービス」です。しかし、「具体的にどこまで対応してもらえるの？」「経理代行や税理士との違いは？」「料金はどのくらいかかるの？」といった疑問を持つ方も少なくありません。<br /><br />

実は、記帳代行・経理代行・顧問税理士は名称こそ似ていますが、それぞれ対応できる業務や費用、利用するべき人が異なります。<br /><br />

このページでは、記帳代行のサービス内容をはじめ、経理代行や顧問税理士との違い、料金相場、利用するメリット・デメリット、依頼する際に気を付けたいポイントまで、初心者にも理解しやすく解説します。<br /><br />

「経理業務にかかる時間を減らしたい」「自分に最適なサービスを選びたい」という方は、ぜひ最後までご覧ください。
          </p>

        </div>
      </section>
    </>
  );
}