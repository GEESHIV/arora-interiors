import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { pexelsImage } from '@/lib/images';

const PILLARS = ['Aesthetics', 'Comfort', 'Functionality'];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-11/12 overflow-hidden rounded-sm shadow-2xl shadow-charcoal-900/15">
            <img
              src={pexelsImage('7166945', 900, 1125)}
              alt="Elegant modern apartment interior with minimalist decor"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-0 hidden w-1/2 overflow-hidden rounded-sm border-[10px] border-ivory-100 shadow-xl sm:block">
            <img
              src={pexelsImage('7045702', 700, 700)}
              alt="Living room with soft pillows, sofa and a glass table"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">About Arora Interiors</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.2] text-charcoal-900 sm:text-5xl">
            Every space tells a story.
          </h2>
          <p className="mt-6 text-base leading-[1.6] text-charcoal-600 sm:text-lg">
            At Arora Interiors, we believe every space tells a story. Our approach focuses on creating interiors that
            balance aesthetics, comfort and functionality while reflecting the individual preferences of each client.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <li key={pillar} className="flex items-center gap-3 border-t border-gold-500/40 pt-4 text-sm font-medium text-charcoal-800">
                <Check className="h-4 w-4 text-gold-700" />
                {pillar}
              </li>
            ))}
          </ul>

          <a href="#enquiry" className="btn btn-dark mt-10">
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
