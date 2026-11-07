import { Maximize2 } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import Lightbox, { type LightboxImage } from '@/components/ui/Lightbox';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '@/data/site';
import { pexelsImage } from '@/lib/images';

const FILTERS = ['All', ...PORTFOLIO_CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  const lightboxImages: LightboxImage[] = useMemo(
    () =>
      items.map((item) => ({
        src: pexelsImage(item.photoId, 1800, 1200),
        alt: `${item.title}, ${item.category}`,
        title: item.title,
        category: item.category,
      })),
    [items],
  );

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  return (
    <section id="portfolio" className="scroll-mt-24 bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Interior Designs"
              title="A gallery of refined living."
              description="Explore design directions across our core categories. Imagery shown here is illustrative and will be replaced with completed Arora Interiors projects."
            />
          </Reveal>

          <Reveal delay={120}>
            <div role="group" aria-label="Filter portfolio by category" className="flex flex-wrap gap-2">
              {FILTERS.map((option) => {
                const active = option === filter;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(option)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                      active
                        ? 'border-charcoal-900 bg-charcoal-900 text-ivory-100'
                        : 'border-charcoal-900/20 text-charcoal-800 hover:border-gold-600 hover:text-gold-700'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <button
              key={`${filter}-${item.id}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.title} full size`}
              className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-sm bg-beige-200 text-left animate-fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4 focus-visible:ring-offset-ivory-100"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <img
                src={pexelsImage(item.photoId, 800, 1000)}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/20 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{item.category}</p>
                  <p className="mt-2 font-serif text-2xl text-ivory-100">{item.title}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory-100/50 bg-charcoal-900/40 text-ivory-100 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
