import ProjectCard from "../components/Postcard";

function Projects() {
  const projects = [
    {
      title: "Megacart",
      description:
        "Megacart is a responsive shopping web application built with HTML, CSS, and JavaScript. It features a dynamic cart system powered by localStorage, a live product search with suggestions, and a clean, modern UI. The project demonstrates core frontend development skills including DOM manipulation, responsive design, and interactive user experience.",
      tech: ["CSS", "HTML", "JavaScript"],
      github: "https://github.com/avinashpal702/Megacart-An-Ecommmerce-website-.git",
      live: "#",
    },
    {
      title:"Brew & Bite Café",
      description:"Brew & Bite Café is a full‑stack multi‑page web application designed to modernize café operations and enhance customer experience. The system features multiple pages (Home, About, Services, Packaging, Contact) along with an Add to Cart functionality for smooth ordering. Customers can browse menus, add items to their cart, and place order seamlessly",
      tech: ["PHP", "CSS", "JavaScript"],
      github: "https://github.com/avinashpal702/brew-and-bite-cafe-A-smallbusiness_startup-website-.git",
      live: "#",
    },
    {
      title:"Home Decor Buyer Finder",
      description:"Home-Decor-Buyer-Finder is a polished home-decor marketplace website that helps buyers discover meaningful pieces for their living spaces and gives sellers a simple way to list and share their finds. The experience pairs a warm editorial brand with practical marketplace functionality.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/avinashpal702/Home-Decor-Buyer-Finder-.git",
      live: "#"
    },
    {
      title:"Student Registration System",
      description:"A light‑weight, role‑based web application that lets students browse available courses, register for them, and gives administrators full CRUD control over the course catalogue. Built with plain PHP, PDO ,Bootstrap 5 and vanilla JavaScript—no Composer dependencies—so it runs out‑of‑the‑box on any XAMPP/LAMP stack.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/avinashpal702/Student-Registration-System.git",
      live: "#"
    },
    {
      title:"FitZone",
      description:"FitZone is a modern fitness studio website built with PHP and Bootstrap. It showcases training programs, coach profiles, and a contact form for new members.",
      tech: ["PHP", "Bootstrap", "JavaScript"],
      github: "https://github.com/avinashpal702/Fit-Zone-.git",
      live: "#"
    },
    {
      title:"HireHub Job Portal",
      description:"HireHub is a full-stack Job Portal Web Application built using the MERN stack. It allows candidates to search and apply for jobs, while recruiters can post jobs and manage applications.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/avinashpal702/HireHub-MERN-Job-Portal.git",
      live: "#"
    },
    {
      title:"Facial Recognition Attendance System",
      description:"A facial recognition-based attendance system that uses computer vision to identify and record student attendance automatically. It enhances security and efficiency in educational institutions.",
      tech: ["Python", "OpenCV", "numpy", "Django"],
      github: "https://github.com/avinashpal702/Facial-Recognition-in-Attendance-System.git",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="ambient-section px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="section-kicker justify-center">My Work</p>
          <h2 className="section-heading mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Featured Projects
          </h2>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-300">
          A selection of builds that showcase my approach to thoughtful design and full-stack development.
        </p>

        <p className="mt-5 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan-100/60">
          Scroll to explore <span aria-hidden="true">↓</span>
        </p>

        <div className="relative mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              stackIndex={index}
              projectCount={projects.length}
              stackSpacing={12}
              stackGap={index === projects.length - 1 ? 0 : "42svh"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;