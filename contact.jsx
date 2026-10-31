function Contact() {
  return (
    <section id="contact" className="ambient-section px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker justify-center">
          Contact
        </p>

        <h2 className="section-heading mt-4 text-4xl font-black text-white sm:text-5xl">
          Let's Work Together
        </h2>

        <p className="mt-5 text-gray-400">
          I'm interested in web development opportunities,
          internships and projects where I can learn and contribute.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:palavinash702@gmail.com"
            className="glow-button rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 font-bold text-slate-950"
          >
            Email Me
          </a>

          <a
            href="https://github.com/avinashpal702"
            target="_blank"
            rel="noreferrer"
            className="glow-button rounded-full border border-white/20 bg-white/5 px-6 py-3 hover:border-cyan-300 hover:text-cyan-200"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/avinashpal988"
            target="_blank"
            rel="noreferrer"
            className="glow-button rounded-full border border-white/20 bg-white/5 px-6 py-3 hover:border-cyan-300 hover:text-cyan-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;