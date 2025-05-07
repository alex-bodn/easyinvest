'use client';

export default function OutAdvantaves() {
  return (
    <section className="max-w-5xl mx-auto mb-16">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-center mb-10">
        Why Choose <span className="text-[#894aff]">EasyInvest</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="bg-[#1C0846] p-15 text-center rounded-lg hover:bg-white/8 transition-all duration-300 border border-[#2C1259]">
          <div className="mb-3 text-[#894aff] text-2xl">🛡️</div>
          <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] mb-2">
            Secure Platform
          </h3>
          <p className="text-white/70 font-[family-name:var(--font-inter)] text-sm">
            Advanced encryption and security measures keep your investments
            protected.
          </p>
        </div>
        <div className="bg-[#1C0846] p-15 text-center rounded-lg hover:bg-white/8 transition-all duration-300 border border-[#2C1259]">
          <div className="mb-3 text-[#894aff] text-2xl">📊</div>
          <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] mb-2">
            Real-Time Analytics
          </h3>
          <p className="text-white/70 font-[family-name:var(--font-inter)] text-sm">
            Access market data and custom alerts to make informed decisions.
          </p>
        </div>
        <div className="bg-[#1C0846] p-15 text-center rounded-lg hover:bg-white/8 transition-all duration-300 border border-[#2C1259]">
          <div className="mb-3 text-[#894aff] text-2xl">💸</div>
          <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] mb-2">
            Low Fees
          </h3>
          <p className="text-white/70 font-[family-name:var(--font-inter)] text-sm">
            Competitive rates with no hidden charges. Start with as little as
            $1.
          </p>
        </div>
      </div>
    </section>
  );
}
