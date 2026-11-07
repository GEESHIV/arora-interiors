import { Hexagon, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS, SERVICES } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-walnut-800 text-ivory-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-ivory-100">
            <Hexagon className="h-8 w-8 text-gold-400" strokeWidth={1.25} />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-medium tracking-[0.25em]">ARORA</span>
              <span className="mt-1 text-[10px] font-medium tracking-[0.4em]">INTERIORS</span>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-[1.6] text-ivory-200/80">{BUSINESS.tagline}</p>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="font-serif text-lg text-ivory-100">Explore</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-serif text-lg text-ivory-100">Services</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <a href="#services" className="transition-colors hover:text-gold-400">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-ivory-100">Contact</h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="leading-[1.6]">{BUSINESS.address}</span>
            </li>
            <li>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold-400">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-gold-400"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-gold-400" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-gold-400/50 pb-0.5 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                Google Business Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-xs text-ivory-200/70 sm:flex-row sm:justify-between lg:px-8">
          <p>&copy; {year} Arora Interiors. All rights reserved.</p>
          <a href="#home" className="transition-colors hover:text-gold-400">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
