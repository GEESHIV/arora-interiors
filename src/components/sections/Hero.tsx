import { ArrowRight } from 'lucide-react';
import { pexelsImage } from '@/lib/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-charcoal-900 text-ivory-100 lg:items-center"
    >
      <img
        src={pexelsImage('8141956', 2000, 1300)}
        alt="Luxury living room with elegant sofas and warm interior lighting"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/65 to-charcoal-900/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-charcoal-900/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-40 lg:px-8 lg:pb-0 lg:pt-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Interior Design Studio &middot; New Delhi
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.15] sm:text-6xl lg:text-7xl">
            WHERE DESIGN MEETS THE ART OF LIVING.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-ivory-200 sm:text-lg">
            Transform your everyday spaces into extraordinary experiences. Discover thoughtfully designed interiors that
            bring elegance, comfort and functionality together with Arora Interiors.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#portfolio" className="btn btn-gold">
              Explore Our Designs
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#enquiry" className="btn btn-outline-light">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden h-12 w-7 -translate-x-1/2 rounded-full border border-ivory-100/50 md:block"
      >
        <span className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-gold-400 animate-bounce-soft" />
      </a>
    </section>
  );
}
