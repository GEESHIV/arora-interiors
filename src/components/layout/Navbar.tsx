import { Hexagon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BUSINESS, NAV_LINKS } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  const onDark = !scrolled || menuOpen;
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          menuOpen
            ? 'bg-charcoal-900 py-4'
            : scrolled
              ? 'bg-ivory-100/95 py-4 shadow-sm backdrop-blur-md'
              : 'bg-transparent py-6'
        }`}
      >
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#home" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Arora Interiors home">
            <Hexagon
              className="h-8 w-8 text-gold-500 transition-transform duration-700 group-hover:rotate-90"
              strokeWidth={1.25}
            />
            <span className={`flex flex-col leading-none ${onDark ? 'text-ivory-100' : 'text-charcoal-900'}`}>
              <span className="font-serif text-xl font-medium tracking-[0.25em]">ARORA</span>
              <span className="mt-1 text-[10px] font-medium tracking-[0.4em]">INTERIORS</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative text-sm tracking-wide transition-colors duration-300 ${
                    onDark ? 'text-ivory-100 hover:text-gold-400' : 'text-charcoal-900 hover:text-gold-700'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#enquiry" className="btn btn-gold hidden px-5 py-2.5 lg:inline-flex">
              Start a Project
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                onDark ? 'border-ivory-100/30 text-ivory-100' : 'border-charcoal-900/20 text-charcoal-900'
              }`}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-30 flex flex-col bg-charcoal-900 px-6 pb-10 pt-28 transition-all duration-500 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                style={{ transitionDelay: menuOpen ? `${index * 60}ms` : '0ms' }}
                className={`block border-b border-ivory-100/10 py-4 font-serif text-3xl text-ivory-100 transition-all duration-500 hover:text-gold-400 ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-4">
          <a href={BUSINESS.phoneHref} onClick={closeMenu} className="btn btn-outline-light">
            Call Now
          </a>
          <a
            href={BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn btn-gold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
