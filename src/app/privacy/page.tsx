import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white/80 font-sans selection:bg-[#A4C639] selection:text-[#050505] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#A4C639] hover:text-white transition-colors mb-12 inline-block font-mono text-sm tracking-widest uppercase">
          ← Back to Experience
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">PRIVACY POLICY</h1>
        <p className="text-sm text-white/40 font-mono mb-12 italic">Last Updated: April 27, 2026</p>

        <div className="space-y-12 leading-relaxed text-lg font-light">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you join our "Inner Circle" collective. This typically includes your email address and any preferences you share with us regarding your matcha ritual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">2. How We Use Your Data</h2>
            <p>
              Your data is used exclusively to deepen your connection with the art of tea. This includes sending you insights into our harvest cycles, traditional brewing mastery, and the occasional path to stillness. We do not sell your personal essence to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">3. Cookies and Tracking</h2>
            <p>
              We use minimal, essential cookies to ensure our digital experience remains fluid. These small bits of data help us remember your journey through the mist of Uji.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">4. Your Rights</h2>
            <p>
              You have the right to disappear from our collective at any time. Every transmission we send includes a link to dissolve your connection with our automated systems.
            </p>
          </section>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 text-sm text-white/30 text-center font-light">
          &copy; 2026 Matcha Experience. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}
