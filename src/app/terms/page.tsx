import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white/80 font-sans selection:bg-[#A4C639] selection:text-[#050505] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#A4C639] hover:text-white transition-colors mb-12 inline-block font-mono text-sm tracking-widest uppercase">
          ← Back to Experience
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">TERMS OF SERVICE</h1>
        <p className="text-sm text-white/40 font-mono mb-12 italic">Last Updated: April 27, 2026</p>

        <div className="space-y-12 leading-relaxed text-lg font-light">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">1. Acceptance of Ritual</h2>
            <p>
              By engaging with our digital platform, you acknowledge the pursuit of quality and the commitment to a superior tea experience. Our services are provided to those who appreciate the slower path to perfection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">2. Use of the Collective</h2>
            <p>
              The "Inner Circle" is a space for education and appreciation. Any use of our content for commercial replication or disruptive behavior within the collective is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">3. Intellectual Property</h2>
            <p>
              All imagery, scrollytelling mechanics, and the "MATCHA EXP." brand identity are the exclusive property of our masters. No part of this experience may be harvested without written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">4. Limitation of Liability</h2>
            <p>
              We are not responsible for any sudden clarity, increased focus, or accidental moments of zen encountered while interacting with our platform.
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
