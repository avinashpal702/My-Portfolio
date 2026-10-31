function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "REST APIs",
    "Tailwind CSS",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="ambient-section px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker justify-center">
          My Skills
        </p>

        <h2 className="section-heading mt-4 text-center text-4xl font-black text-white sm:text-5xl">
          Technologies I Work With
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass-panel lift-card rounded-2xl p-5 text-center font-semibold text-slate-300 hover:text-cyan-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;