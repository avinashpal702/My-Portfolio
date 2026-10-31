function About() {
  return (
    <section id="about" className="ambient-section px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="section-kicker mb-3 justify-center">
          About Me
        </p>

        <h2 className="section-heading text-center text-4xl font-black text-white sm:text-5xl">
          Building the Web, One Project at a Time
        </h2>

        <p className="mt-8 text-center text-lg leading-8 text-gray-400">
          I'm a passionate web developer focused on building modern
          full-stack applications with the MERN stack. I enjoy turning
          ideas into functional, responsive and user-friendly digital
          experiences.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="glass-panel lift-card rounded-2xl p-6 text-center">
            <h3 className="gradient-text text-3xl font-black">MERN</h3>
            <p className="mt-2 text-gray-400">
              Full Stack Development
            </p>
          </div>

          <div className="glass-panel lift-card rounded-2xl p-6 text-center">
            <h3 className="gradient-text text-3xl font-black">React</h3>
            <p className="mt-2 text-gray-400">
              Modern Frontend
            </p>
          </div>

          <div className="glass-panel lift-card rounded-2xl p-6 text-center">
            <h3 className="gradient-text text-3xl font-black">Node</h3>
            <p className="mt-2 text-gray-400">
              Backend Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;