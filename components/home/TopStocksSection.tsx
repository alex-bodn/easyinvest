'use client';

export default function TopStocksSection() {
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-center mb-6">
        Top Performing Stocks
      </h2>
      <p className="text-center text-white/70 font-[family-name:var(--font-inter)] max-w-xl mx-auto mb-6 text-sm">
        Track market leaders and add them to your portfolio with one click.
      </p>
      <div className="overflow-x-auto rounded-lg border border-[#2C1259]">
        <table className="w-full">
          <tbody>
            {[
              {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                price: 192.65,
                change: +1.87,
              },
              {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                price: 417.72,
                change: +0.52,
              },
              {
                symbol: 'GOOGL',
                name: 'Alphabet Inc.',
                price: 152.16,
                change: -0.73,
              },
              {
                symbol: 'AMZN',
                name: 'Amazon.com Inc.',
                price: 178.23,
                change: +2.14,
              },
              {
                symbol: 'NVDA',
                name: 'NVIDIA Corp.',
                price: 446.08,
                change: +3.56,
              },
            ].map((stock) => (
              <tr
                key={stock.symbol}
                className="border-b border-white/5 hover:bg-[#1C0846]"
              >
                <td className="py-3 pl-4 font-[family-name:var(--font-roboto-mono)] font-medium">
                  {stock.symbol}
                </td>
                <td className="py-3 font-[family-name:var(--font-inter)] text-sm">
                  {stock.name}
                </td>
                <td className="py-3 font-[family-name:var(--font-roboto-mono)]">
                  ${stock.price.toFixed(2)}
                </td>
                <td
                  className={`py-3 font-[family-name:var(--font-roboto-mono)] ${
                    stock.change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stock.change > 0 ? '+' : ''}
                  {stock.change.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}