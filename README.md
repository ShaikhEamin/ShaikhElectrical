# ⚡ ShaikhElectrical – Portfolio Website

A modern, responsive personal portfolio for **Shaikh Eamin**, Electrical Engineer & Technician.

## Features

- **Hero section** – animated introduction with CTA buttons
- **About section** – personal summary and key facts
- **Skills section** – service cards and animated proficiency bars
- **Projects section** – showcase of six real-world projects
- **Contact section** – info panel and a client-side validated contact form
- Smooth scroll-reveal animations powered by the Intersection Observer API
- Fully responsive layout (mobile hamburger menu, fluid grids)
- Dark-themed design with amber/gold accents

## Project Structure

```
ShaikhElectrical/
├── index.html        # Main portfolio page
├── css/
│   └── style.css     # All styles (dark theme, responsive)
├── js/
│   └── main.js       # Interactivity (nav, animations, form)
└── README.md
```

## Getting Started

No build step required — open `index.html` directly in your browser, or serve it with any static file server:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

## Customisation

- Update personal details (name, location, email) in `index.html`.
- Replace placeholder projects in the **Projects** section with your own work.
- Adjust brand colours by editing the CSS custom properties in `css/style.css` (`:root` block).
