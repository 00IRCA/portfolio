'use client';

import { SECTION_IDS } from '@/src/constants/sections';

const footerLinks = [
  { label: 'About', id: SECTION_IDS.aboutMe },
  { label: 'Technologies', id: SECTION_IDS.technologies },
  { label: 'Experience', id: SECTION_IDS.experience },
  { label: 'Projects', id: SECTION_IDS.projects },
  { label: 'Contact', id: SECTION_IDS.contact },
];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-10">
        {/* Identity */}
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">Ismael Ruiz</span>
          <span className="text-foreground/60 text-sm">Full Stack Developer</span>
          <a
            href="mailto:00ircarlin@gmail.com"
            className="text-primary text-sm hover:underline mt-1"
          >
            00ircarlin@gmail.com
          </a>
        </div>

        {/* Quick nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col gap-2">
            {footerLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
            Connect
          </span>
          <a
            href="https://www.linkedin.com/in/ismael-ruiz-carlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/10 py-4 text-center text-xs text-foreground/40">
        © {currentYear} Ismael Ruiz · Built with Next.js
      </div>
    </footer>
  );
}
