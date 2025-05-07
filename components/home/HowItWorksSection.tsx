'use client';

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto mb-16 bg-[#1C0846] p-6 rounded-lg border border-[#2C1259]">
      <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-center mb-8">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            step: 'Create Account',
            desc: 'Sign up in under 2 minutes',
            icon: '👤',
          },
          {
            step: 'Deposit Funds',
            desc: 'Secure and instant funding',
            icon: '💳',
          },
          {
            step: 'Select Investments',
            desc: 'Choose from 134+ stocks',
            icon: '📈',
          },
          {
            step: 'Track & Grow',
            desc: 'Monitor performance 24/7',
            icon: '🚀',
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center mb-2 font-[family-name:var(--font-roboto-mono)] text-xs">
              {index + 1}
            </div>
            <h3 className="text-base font-medium font-[family-name:var(--font-montserrat)] mb-1">
              {item.step}
            </h3>
            <p className="text-white/60 font-[family-name:var(--font-inter)] text-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
