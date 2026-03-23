# Portfolio — Ismael Ruiz

A personal portfolio built with Next.js, featuring animated sections, dark/light theme, and a functional contact form.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Contact form:** EmailJS
- **Testing:** Playwright (visual screenshot tests)
- **Linting/Formatting:** ESLint + Prettier

## Features

- Hero, About, Technologies, Experience, Projects, and Contact sections
- Dark/light theme toggle with localStorage persistence
- Animated UI with scroll-triggered transitions (Framer Motion)
- Functional contact form via EmailJS (no backend required)
- Fully responsive — desktop and mobile

## Getting Started

### Prerequisites

- Node.js 18+

### Install dependencies

```bash
npm install
```

### Set up environment variables

Create a `.env.local` file at the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these values from your [EmailJS](https://www.emailjs.com/) dashboard.

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command                     | Description                               |
| --------------------------- | ----------------------------------------- |
| `npm run dev`               | Start development server                  |
| `npm run build`             | Build for production                      |
| `npm run start`             | Start production server                   |
| `npm run lint`              | Run ESLint                                |
| `npm run format`            | Format code with Prettier                 |
| `npm run format-check`      | Check formatting without writing          |
| `npm run screenshot`        | Run desktop screenshot tests (Playwright) |
| `npm run screenshot:mobile` | Run mobile screenshot tests (Playwright)  |

## Testing

Playwright generates visual screenshots of each section in light and dark themes, for both desktop (1440×900) and mobile (390×844) viewports. Output is saved to `/screenshots/`.

```bash
# Make sure the dev server is running first (or let Playwright start it)
npm run screenshot
npm run screenshot:mobile
```

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel dashboard.
4. Deploy.

For other platforms (Netlify, AWS, etc.), run `npm run build` and serve the `.next/` output with Node.js.
