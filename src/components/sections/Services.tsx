import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/data/site';
import { pexelsImage } from '@/lib/images';

type ServicesProps = {
  onEnquire: (service: string) => void;
};

export default function Services({ onEnquire }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Interior Design Services"
            title="Considered design for every room."
            description="From a single room refresh to a complete home interior, each service is shaped around how you live."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 4) * 90} className="h-full">
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-beige-200">
                  <img
                    src={pexelsImage(service.photoId, 640, 800)}
                    alt={`${service.title} example`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-[1.2] text-charcoal-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-[1.6] text-charcoal-600">{service.description}</p>
                <button
                  type="button"
                  onClick={() => onEnquire(service.title)}
                  className="btn btn-outline-dark mt-6 self-start px-5 py-2.5"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
