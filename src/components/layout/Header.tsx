'use client';

import { useEffect, useState } from 'react';
import { SECTION_IDS } from '@/src/constants/sections';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', id: SECTION_IDS.home },
  { label: 'About', id: SECTION_IDS.aboutMe },
  { label: 'Technologies', id: SECTION_IDS.technologies },
  { label: 'Experience', id: SECTION_IDS.experience },
  { label: 'Projects', id: SECTION_IDS.projects },
  { label: 'Contact', id: SECTION_IDS.contact },
];

const sectionIds = navLinks.map((l) => l.id);

interface NavLinksProps {
  activeId: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  itemClassName?: string;
}

function NavLinks({ activeId, onNavigate, itemClassName = '' }: NavLinksProps) {
  return (
    <>
      {navLinks.map(({ label, id }) => (
        <li key={label}>
          <a
            href={`#${id}`}
            onClick={(e) => onNavigate(e, id)}
            aria-current={activeId === id ? true : undefined}
            className={`${itemClassName} ${activeId === id ? 'text-primary' : ''}`}
          >
            {label}
          </a>
        </li>
      ))}
    </>
  );
}

export default function Header() {
  const [activeId, setActiveId] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="px-10 py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/8 shadow-sm">
      <nav className="flex justify-between items-center gap-4" aria-label="Main navigation">
        {/* Brand name */}
        <a
          href={`#${SECTION_IDS.home}`}
          onClick={(e) => handleScroll(e, SECTION_IDS.home)}
          className="text-lg font-bold tracking-tight shrink-0"
        >
          Ismael Ruiz
        </a>
        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <ul className="hidden md:flex flex-row gap-8 text-lg">
            <NavLinks activeId={activeId} onNavigate={handleScroll} />
          </ul>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <ul
        className={`md:hidden flex flex-col gap-4 text-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <NavLinks activeId={activeId} onNavigate={handleScroll} itemClassName="block" />
      </ul>
    </header>
  );
}
