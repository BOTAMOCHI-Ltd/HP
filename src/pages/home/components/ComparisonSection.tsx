const rows = [
  {
    label: '会社の社保負担',
    nothing: { text: '現状維持', type: 'neutral' },
    zerofuri: { text: '削減される', type: 'good' },
  },
  {
    label: '従業員の手取り',
    nothing: { text: '現状維持', type: 'neutral' },
    zerofuri: { text: '必ず増加', type: 'good' },
  },
  {
    label: '採用訴求（求人票）',
    nothing: { text: 'なし', type: 'bad' },
    zerofuri: { text: '「社宅あり」と明示', type: 'good' },
  },
  {
    label: '離職率',
    nothing: { text: '現状維持', type: 'neutral' },
    zerofuri: { text: '低下', type: 'good' },
  },
];

type CellType = 'good' | 'bad' | 'half' | 'neutral';

function NothingBadge({ text, type }: { text: string; type: CellType }) {
  if (type === 'bad') {
    return <span className="text-xs font-medium" style={{ color: '#969696' }}>✕ {text}</span>;
  }
  return <span className="text-xs font-medium" style={{ color: '#969696' }}>{text}</span>;
}

function ZerofuriBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm md:text-base font-bold" style={{ color: '#ff8c00' }}>
      <span className="text-base md:text-lg font-black">✓</span>
      <span className="leading-tight">{text}</span>
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-[1160px] mx-auto">

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3 leading-snug">
          何もしない vs ゼロ福利
        </h2>
        <p className="text-sm text-center text-gray-500 mb-10">
          ゼロ福利を利用するだけで、企業・従業員どちらにも大きなメリットがあります。
        </p>

        {/* Table */}
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {/* 比較項目ヘッダー */}
                <th
                  className="text-left text-xs font-semibold text-white px-3 md:px-5 py-2 md:py-3 rounded-tl-xl" style={{ backgroundColor: '#191970', width: '36%' }}
                >
                </th>
                {/* 何もしないヘッダー — 縮小・淡色 */}
                <th
                  className="text-center text-xs font-semibold bg-gray-50 px-2 py-2 md:py-3"
                  style={{ width: '26%', color: '#969696', backgroundColor: '#f5f5f5' }}
                >
                  何もしない
                </th>
                {/* ゼロ福利ヘッダー — 強調 */}
                <th
                  className="text-center text-sm md:text-base font-extrabold text-white px-3 md:px-5 py-3 md:py-4 rounded-t-xl"
                  style={{ width: '38%', backgroundColor: '#ff8c00' }}
                >
                  ゼロ福利
                  <span className="block text-xs font-medium opacity-80 mt-0.5">（借上社宅）</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  {/* ラベル */}
                  <td className="text-left text-xs md:text-sm font-semibold text-white px-3 md:px-5 py-2 md:py-3 leading-snug" style={{ backgroundColor: '#191970' }}>
                    {row.label}
                  </td>
                  {/* 何もしない — 小さく・薄く */}
                  <td className="text-center bg-white px-2 py-2">
                    <NothingBadge text={row.nothing.text} type={row.nothing.type as CellType} />
                  </td>
                  {/* ゼロ福利 — 大きく・目立つ */}
                  <td
                    className="text-center px-3 md:px-5 py-4 md:py-5"
                    style={{ backgroundColor: '#faf0e6' }}
                  >
                    <ZerofuriBadge text={row.zerofuri.text} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </section>
  );
}
