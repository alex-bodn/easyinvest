"use client";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-8">
      <Navbar />
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto mb-16">
        <div className="bg-[#1C0846] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between border border-[#2C1259]">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-montserrat)] mb-4">
              WE HAVE MORE THAN<span className="text-[#894aff]">134 STOCKS</span>
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Begin your investment journey today and claim your $50 bonus! Ready to grow your wealth? Simply click below to start trading.
            </p>
            <button className="px-5 py-2.5 bg-white text-[#1C0846] font-medium rounded-md transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-[#2C1259]">
              <div className="w-full bg-[#140152]/20 rounded-md p-6 flex flex-col items-center justify-center">
                <span className="text-4xl font-[family-name:var(--font-roboto-mono)] font-bold">$50</span>
                <span className="text-xs text-gray-400">for signup</span>
                <div className="h-px w-70 bg-white/10 my-6"></div>
                <div className="w-full">
                  <div className="text-center">
                    <p className="text-white/60 mb-1 text-xs">S&P 500</p>
                    <p className="text-2xl font-[family-name:var(--font-roboto-mono)]">4,783</p>
                    <p className="text-green-400 text-xs">+1.23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-center mb-10">
          Why Choose <span className="text-[#894aff]">EasyInvest</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1C0846] p-5 rounded-lg hover:bg-white/8 transition-all duration-300 border border-[#2C1259]">
            <div className="mb-3 text-[#894aff] text-2xl">🛡️</div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] mb-2">Secure Platform</h3>
            <p className="text-white/70 font-[family-name:var(--font-inter)] text-sm">
              Advanced encryption and security measures keep your investments protected.
            </p>
          </div>
          <div className="bg-[#1C0846] p-5 rounded-lg hover:bg-white/8 transition-all duration-300 border border-[#2C1259]">
            <div className="mb-3 text-[#894aff] text-2xl">📊</div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] mb-2">Real-Time Analytics</h3>
            <p className="text-white/70 font-[family-name:var(--font-inter)] text-sm">
              Access market data and custom alerts to make informed decisions.
            </p>
          </div>
          <div className="bg-[#1C0846] p-5 rounded-lg hover:bg-white/8 transition-all duration-300 border border-[#2C1259]">
            <div className="mb-3 text-[#894aff] text-2xl">💸</div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] mb-2">Low Fees</h3>
            <p className="text-white/70 font-[family-name:var(--font-inter)] text-sm">
              Competitive rates with no hidden charges. Start with as little as $1.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto mb-16 bg-[#1C0846] p-6 rounded-lg border border-[#2C1259]">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: "Create Account", desc: "Sign up in under 2 minutes", icon: "👤" },
            { step: "Deposit Funds", desc: "Secure and instant funding", icon: "💳" },
            { step: "Select Investments", desc: "Choose from 134+ stocks", icon: "📈" },
            { step: "Track & Grow", desc: "Monitor performance 24/7", icon: "🚀" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center mb-2 font-[family-name:var(--font-roboto-mono)] text-xs">
                {index + 1}
              </div>
              <h3 className="text-base font-medium font-[family-name:var(--font-montserrat)] mb-1">{item.step}</h3>
              <p className="text-white/60 font-[family-name:var(--font-inter)] text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Stocks */}
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
                { symbol: 'AAPL', name: 'Apple Inc.', price: 192.65, change: +1.87 },
                { symbol: 'MSFT', name: 'Microsoft Corp.', price: 417.72, change: +0.52 },
                { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 152.16, change: -0.73 },
                { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.23, change: +2.14 },
                { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 446.08, change: +3.56 },
              ].map((stock) => (
                <tr key={stock.symbol} className="border-b border-white/5 hover:bg-[#1C0846]">
                  <td className="py-3 pl-4 font-[family-name:var(--font-roboto-mono)] font-medium">{stock.symbol}</td>
                  <td className="py-3 font-[family-name:var(--font-inter)] text-sm">{stock.name}</td>
                  <td className="py-3 font-[family-name:var(--font-roboto-mono)]">${stock.price.toFixed(2)}</td>
                  <td className={`py-3 font-[family-name:var(--font-roboto-mono)] ${stock.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto my-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-montserrat)] mb-4">
          Ready to Start?
        </h2>
        <p className="text-white/70 font-[family-name:var(--font-inter)] mb-6 max-w-md mx-auto">
          Join thousands of investors who trust EasyInvest.
          Start with $50 on us.
        </p>
        <button className="px-6 py-3 bg-[#894aff] hover:bg-[#9d69ff] rounded transition-colors text-base font-medium border border-[#2C1259]">
          Create Account
        </button>
      </section>
    </div>
  );
}
