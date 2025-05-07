'use client';

export default function CallToActionSection() {
  return (
    <section className="max-w-4xl mx-auto my-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-montserrat)] mb-4">
        Ready to Start?
      </h2>
      <p className="text-white/70 font-[family-name:var(--font-inter)] mb-6 max-w-md mx-auto">
        Join thousands of investors who trust EasyInvest. Start with $50 on us.
      </p>
      <button className="px-6 py-3 bg-[#894aff] hover:bg-[#9d69ff] rounded transition-colors text-base font-medium border border-[#2C1259]">
        Create Account
      </button>
    </section>
  );
}
