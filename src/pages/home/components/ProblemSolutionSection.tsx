export default function ProblemSolutionSection() {
  return (
    <section className="">
      <div className="py-16" style={{ backgroundColor: '#ebf3fd' }}>
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#191970' }}>
          借上社宅制度が
一般化していない理由
        </h2>

        {/* Barrier 1 with image inside */}
        <div className="mb-6">
          <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            {/* Left: text */}
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded mb-4 text-white"
                style={{ backgroundColor: '#666' }}
              >
                導入の壁1
              </span>
              <h3 className="whitespace-pre-wrap text-base font-bold mb-3" style={{ color: '#191970' }}>
                {'負担が大きく、\n大手企業しか利用できない'}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                社宅制度を導入しても企業が一部金額負担しなければいけないので、中小企業が導入することはほとんどありません。
              </p>
            </div>
            {/* Right: image */}
            <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/BOTAMOCHI-FV_-1-fc275e.png`}
                alt="導入の壁1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Barrier 2 with image inside */}
        <div className="mb-6">
          <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            {/* Left: text */}
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded mb-4 text-white"
                style={{ backgroundColor: '#666' }}
              >
                導入の壁2
              </span>
              <h3 className="whitespace-pre-wrap text-base font-bold mb-3" style={{ color: '#191970' }}>
                業務負荷が大きい
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                制度を維持するためには、契約締結や各所との調整、請求管理など、膨大な工数を要する事務処理が避けられません。
              </p>
            </div>
            {/* Right: image */}
            <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/harry_man_color-63acec.png`}
                alt="導入の壁2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Barrier 3 with image inside */}
        <div className="mb-10">
          <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            {/* Left: text */}
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded mb-4 text-white"
                style={{ backgroundColor: '#666' }}
              >
                導入の壁3
              </span>
              <h3 className="whitespace-pre-wrap text-base font-bold mb-3" style={{ color: '#191970' }}>
                専門知識が必要で導入ができない
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                税法対応や複雑な規定改定が必要なことも導入のハードルです。
              </p>
            </div>
            {/* Right: image */}
            <div className="w-full md:w-56 h-40 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/trouble_man_color-1-9a5b62.png`}
                alt="導入の壁3"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

      </div>
      </div>

      {/* Arrow + Solution - orange background */}
      <div className="py-10" style={{ backgroundColor: 'rgb(250, 240, 230)' }}>
        <div className="max-w-[1160px] mx-auto px-6">
        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <img
            src="https://assets-biz-portal.moneyforward.com/packs/dist/images/portal/corporate_housing_benefits/show/icon_arrow_down_blue-8261d21c76e4c1c5680605408b1f7e9a.svg"
            alt="矢印"
            className="w-8 h-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(55%) sepia(90%) saturate(1000%) hue-rotate(1deg) brightness(105%)' }}
          />
        </div>

        {/* Solution header */}
        <div className="text-center mb-10">
          <p className="text-base font-bold mb-2" style={{ color: 'rgb(25, 25, 112)' }}>ゼロ福利なら</p>
          <p className="text-xl font-bold">
            <span style={{ color: 'rgb(255, 140, 0)' }}>どんな規模の企業</span><span style={{ color: 'rgb(25, 25, 112)' }}>でも、</span><br />
            <span style={{ color: 'rgb(25, 25, 112)' }}>かんたんに</span><span style={{ color: 'rgb(255, 140, 0)' }}>導入・運用</span><span style={{ color: 'rgb(25, 25, 112)' }}>できます</span>
          </p>
        </div>

        {/* 3 solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              num: '01',
              icon: 'ri-building-4-line',
              title: '中堅・中小企業も利用可能に',
              desc: '独自のスキームで、\n社宅家賃を企業が負担する必要が\nありません',
            },
            {
              num: '02',
              icon: 'ri-draft-line',
              title: '面倒な契約手続きを代行',
              desc: '契約手続きや管理会社との調整など、\n煩雑な手続きは全て当社が代行します。',
            },
            {
              num: '03',
              icon: 'ri-shield-check-line',
              title: '煩雑な制度導入もサポート',
              desc: 'ルールの作成から労使の話し合い、社員への周知まで、まるごとサポート。\n現場に定着するまでしっかり伴走します。',
            },
          ].map((item) => (
            <div key={item.num} className="bg-white rounded-lg p-6 text-center">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 text-white text-lg font-bold"
                style={{ backgroundColor: 'rgb(255, 140, 0)' }}
              >
                {item.num}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 flex items-center justify-center">
                  <i className={`${item.icon} text-3xl`} style={{ color: '#1055b6' }}></i>
                </div>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: 'rgb(255, 140, 0)' }}>{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
