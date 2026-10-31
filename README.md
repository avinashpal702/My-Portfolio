# Avinash Pal — Developer Portfolio

A personal portfolio website for **Avinash Pal**, a web developer focused on modern, responsive applications and the MERN stack. The site introduces the developer, highlights skills and selected projects, and provides direct ways to get in touch.

## Overview

The portfolio is a single-page React application built with Vite. Its visual style combines a dark navy background, cyan and violet ambient gradients, glass-like panels, and subtle motion. Visitors can use the fixed navigation to move between sections, browse project cards, and follow the contact links to email, GitHub, or LinkedIn.

### Portfolio sections

- **Home** — Introduction, developer role, short profile summary, technology highlights, a portrait, and a link to the projects section.
- **About** — A concise overview of the developer's interests and focus, with summary cards for MERN, React, and Node.js.
- **Skills** — A grid of front-end, back-end, and development tools and practices.
- **Projects** — Seven project cards with descriptions, technology tags, and GitHub links.
- **Contact** — Email, GitHub, and LinkedIn links, along with an invitation to discuss opportunities, internships, and projects.

## Featured projects

The project list is maintained in `src/sections/projects.jsx`.

| Project | Technologies shown | Summary |
| --- | --- | --- |
| Megacart | HTML, CSS, JavaScript | Responsive shopping experience with a local-storage cart and product search. |
| Brew & Bite Café | PHP, CSS, JavaScript | Multi-page café website with menu browsing and add-to-cart functionality. |
| Home Decor Buyer Finder | React, Node.js, Express, MongoDB | Marketplace concept for discovering home-decor items and sharing listings. |
| Student Registration System | PHP, MySQL, Bootstrap, JavaScript | Role-based course browsing and registration with administrator catalogue management. |
| FitZone | PHP, Bootstrap, JavaScript | Fitness studio website showcasing programs, coaches, and a contact form. |
| HireHub Job Portal | MongoDB, Express.js, React.js, Node.js | MERN job portal for candidate applications and recruiter job and application management. |
| Facial Recognition Attendance System | Python, OpenCV, NumPy, Django | Attendance application concept using facial recognition and computer vision. |

Each project currently has a GitHub repository link. The live-demo links are placeholders (`#`) until deployed demo URLs are added.

## Technology

- **React 18** — Component-based user interface.
- **Vite 5** — Development server and production bundler.
- **Tailwind CSS 4** — Utility classes for responsive layout and component styling.
- **Custom CSS** — Theme variables, gradients, glass panels, hover effects, project-card animations, and reduced-motion handling.

The portfolio itself is a static front-end application; it does not have a server-side API or database.

## Requirements

- Node.js and npm
- A modern browser

## Run locally

1. Clone or download this project.
2. Open a terminal in the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Vite development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (by default, `http://localhost:5173`).

To create and preview a production build:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. Deploy that directory to a static hosting provider that supports single-page front-end sites.

### Windows PowerShell note

If PowerShell's execution policy prevents the `npm` script shim from running, use the Windows command shim instead:

```powershell
npm.cmd install
npm.cmd run dev
```

## Project structure

```text
.
├── public/
│   └── Avinash.jpg.png      # Public portrait asset used by the home section
├── src/
│   ├── app.jsx              # Page composition and footer
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global theme, layout effects, and motion styles
│   ├── components/
│   │   ├── navbar.jsx       # Fixed navigation and responsive mobile menu
│   │   └── Postcard.jsx     # Reusable, animated project card
│   └── sections/
│       ├── hero.jsx         # Home / introduction
│       ├── about.jsx        # About section
│       ├── skills.jsx       # Skills grid
│       ├── projects.jsx     # Project data and project section
│       └── contact.jsx      # Contact methods and social profile links
├── index.html               # HTML document, page title, and description
├── package.json             # Dependencies and npm scripts
├── package-lock.json        # Locked npm dependency versions
└── vite.config.js           # Vite, React, and Tailwind CSS plugins
```

## How it works

- `src/main.jsx` mounts the React application into the `#root` element in `index.html`.
- `src/app.jsx` assembles the navigation, page sections, and footer.
- The navigation links use section IDs (`#home`, `#about`, `#skills`, `#projects`, and `#contact`) for in-page movement. On small screens, the menu expands and closes after a section is selected.
- `src/sections/projects.jsx` stores project titles, descriptions, technology labels, and external links, then renders a `Postcard` for each entry.
- `src/components/Postcard.jsx` uses `IntersectionObserver` to reveal cards as they enter the viewport. The cards use sticky positioning to create the stacked scrolling presentation. If `IntersectionObserver` is unavailable, the cards are shown without waiting for observation.
- `src/index.css` defines the color palette, page background, shared visual effects, animation, smooth scrolling, and a `prefers-reduced-motion` treatment.

## Updating portfolio content

### Personal links

Update the relevant anchors in:

- `src/sections/contact.jsx` for email, GitHub, and LinkedIn.
- `src/sections/hero.jsx` for the home-section GitHub button.

### Portrait

Replace `public/Avinash.jpg.png` with the desired image and update the `src` in `src/sections/hero.jsx` if the filename changes. Keep an appropriate descriptive `alt` value.

### Skills

Edit the `skills` array in `src/sections/skills.jsx`. Each entry is rendered as one item in the responsive skills grid.

### Projects

Edit the `projects` array in `src/sections/projects.jsx`. Each project object includes:

- `title` — Project name.
- `description` — Short overview displayed on the card.
- `tech` — Array of technology labels.
- `github` — Repository URL.
- `live` — Deployed project URL; replace `#` with the actual URL when available.

The `Projects` component derives the card numbering and total count from this array.

### Page title and description

Update the `<title>` and description metadata in `index.html` to change how the portfolio is named in the browser tab and described by search or link previews.

## npm scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the generated production build locally for a preview. |

## Contact

- **Email:** [palavinash702@gmail.com](mailto:palavinash702@gmail.com)
- **GitHub:** [github.com/avinashpal702](https://github.com/avinashpal702)
- **LinkedIn:** [linkedin.com/in/avinashpal988](https://www.linkedin.com/in/avinashpal988)
