import { Armchair, Compass, Gem, Heart, Hourglass, Sparkles, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const PRINCIPLES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Thoughtful Space Planning',
    description: 'Layouts that guide movement, light and privacy before a single finish is chosen.',
    icon: Compass,
  },
  {
    title: 'Modern Aesthetics',
    description: 'Clean lines, considered palettes and contemporary forms that feel current yet unforced.',
    icon: Sparkles,
  },
  {
    title: 'Comfort and Functionality',
    description: 'Spaces that look refined and work effortlessly for everyday life.',
    icon: Armchair,
  },
  {
    title: 'Attention to Detail',
    description: 'From joinery and hardware to the warmth of lighting, every detail is considered.',
    icon: Gem,
  },
  {
    title: 'Personalized Design Approach',
    description: 'Every concept starts with how you live, what you love and what you need.',
    icon: Heart,
  },
  {
    title: 'Timeless Interiors',
    description: 'Enduring materials and proportion, composed to stay beautiful for years to come.',
    icon: Hourglass,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-24 bg-charcoal-900 py-24 text-ivory-100 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Our Design Philosophy"
            title="Principles behind every interior."
            description="We design with intention. These six principles guide every project, from the first sketch to the final styling."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-ivory-100/10 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={(index % 3) * 100} className="h-full">
              <div className="group h-full bg-charcoal-900 p-8 transition-colors duration-500 hover:bg-charcoal-800 lg:p-10">
                <Icon
                  className="h-9 w-9 text-gold-400 transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
                <h3 className="mt-8 font-serif text-2xl text-ivory-100">{title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-ivory-200/75">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
