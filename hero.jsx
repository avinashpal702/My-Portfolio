function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-8 pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="section-kicker mb-5">Hello, I&apos;m</p>

          <h1 className="section-heading text-5xl font-black leading-none tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            <span className="text-white">Avinash</span>{" "}
            <span className="gradient-text">Pal</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-200 sm:text-3xl">
            MERN Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build modern, responsive and scalable web applications using MongoDB,
            Express.js, React.js and Node.js.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="glow-button rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              View Projects
            </a>

            <a
              href="https://github.com/avinashpal702"
              target="_blank"
              rel="noreferrer"
              className="glow-button rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:border-cyan-300 hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">React</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Node.js</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">MongoDB</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">UI/UX</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-5 rounded-full bg-cyan-400/25 blur-3xl" />
            <div className="hero-photo glass-panel relative overflow-hidden rounded-[2rem] border border-cyan-400/20 p-3 shadow-[0_0_40px_rgba(34,211,238,0.15)] transition duration-500 hover:scale-[1.03] hover:border-cyan-300/50 hover:shadow-[0_0_60px_rgba(34,211,238,0.28)]">
              <img
                src="/Avinash.jpg.png"
                alt="Avinash Pal"
                className="relative h-72 w-72 rounded-[1.5rem] border border-white/10 object-cover sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;