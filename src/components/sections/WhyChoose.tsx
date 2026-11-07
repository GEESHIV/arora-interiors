import {
  Eye,
  Layers,
  MessageCircle,
  Ruler,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { pexelsImage } from '@/lib/images';

const REASONS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Designs shaped by you',
    description: 'We begin with your lifestyle, tastes and priorities, so the result feels unmistakably yours.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Aesthetics with function',
    description: 'Beauty and practicality are planned together, never traded against one another.',
    icon: Layers,
  },
  {
    title: 'Smart use of space',
    description: 'Thoughtful planning helps every room feel open, organised and generous.',
    icon: Ruler,
  },
  {
    title: 'Care in every detail',
    description: 'Materials, finishes and lighting are selected and coordinated with precision.',
    icon: Eye,
  },
  {
    title: 'A simple enquiry process',
    description: 'Share your requirements in a few steps and connect directly with our team on WhatsApp.',
    icon: MessageCircle,
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="overflow-hidden rounded-sm shadow-2xl shadow-charcoal-900/15">
            <img
              src={pexelsImage('6587827', 900, 1100)}
              alt="Marble staircase with a golden banister in a classic home"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Arora Interiors"
              title="A thoughtful partner for your home."
              description="Every project is approached with care, clarity and an eye for the details that make a space feel complete."
            />
          </Reveal>

          <ul className="mt-12 divide-y divide-charcoal-900/10 border-y border-charcoal-900/10">
            {REASONS.map(({ title, description, icon: Icon }, index) => (
              <li key={title}>
                <Reveal delay={index * 90}>
                  <div className="group flex gap-6 py-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-charcoal-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal-900">{title}</h3>
                      <p className="mt-2 text-sm leading-[1.6] text-charcoal-600">{description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
