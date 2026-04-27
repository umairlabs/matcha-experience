import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] text-white/50 border-t border-white/5 py-16 px-6 md:px-12 lg:px-24 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-black tracking-tighter text-white/90 mb-2">
            MATCHA <span className="text-[#A4C639]">EXP.</span>
          </h2>
          <p className="text-sm font-light">The Ultimate Iced Matcha Experience.</p>
        </div>

        {/* Legal Info */}
        <div className="flex flex-col items-start md:items-end text-xs font-light tracking-wide text-left md:text-right">
          <p className="mb-2 opacity-40">&copy; {new Date().getFullYear()} Matcha Experience. All Rights Reserved.</p>
          <div className="flex gap-6 opacity-30">
            <Link href="/privacy" className="hover:text-white hover:opacity-100 transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white hover:opacity-100 transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
