import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-black tracking-tight text-white">
            Avinash<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/20 md:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 border-t border-white/10 pt-3 md:hidden">
            {links.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;