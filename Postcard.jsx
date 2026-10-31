import { useEffect, useRef, useState } from "react";

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  animationDelay = 0,
  stackIndex = 0,
  stackSpacing = 0,
  stackGap = 0,
  projectCount = 1,
}) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      aria-labelledby={`project-title-${stackIndex}`}
      style={{
        top: `calc(5.5rem + ${stackIndex * stackSpacing}px)`,
        zIndex: stackIndex + 1,
        marginBottom: stackGap,
        transitionDelay: `${isVisible ? animationDelay : 0}ms`,
      }}
      className={`project-card project-card-reveal group sticky mx-auto w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-400/20" />

      <div className="relative">
        <div className="mb-7 flex items-center justify-between gap-4">
          <span className="project-label">Featured project</span>
          <span className="font-mono text-xs tracking-[0.18em] text-slate-400">
            {String(stackIndex + 1).padStart(2, "0")}{" "}
            <span className="text-slate-600">/</span>{" "}
            {String(projectCount).padStart(2, "0")}
          </span>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(12rem,0.65fr)]">
          <div>
            <h3
              id={`project-title-${stackIndex}`}
              className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-3xl"
            >
              {title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="project-art relative flex min-h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 via-sky-500/10 to-violet-500/20"
          >
            <div className="project-art-orbit absolute h-36 w-36 rounded-full border border-cyan-200/20" />
            <div className="absolute h-24 w-24 rounded-full border border-violet-200/20" />
            <span className="project-art-number relative font-black tracking-[-0.1em] text-white/90">
              {String(stackIndex + 1).padStart(2, "0")}
            </span>
            <span className="absolute bottom-4 left-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-cyan-100/70">
              Selected work
            </span>
            <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-300/20 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition duration-300 hover:translate-x-1 hover:text-cyan-300"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition duration-300 hover:translate-x-1 hover:text-cyan-300"
          >
            Live Demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;