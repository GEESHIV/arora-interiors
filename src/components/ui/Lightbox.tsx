import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, type MouseEvent } from 'react';

export type LightboxImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export default function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const total = images.length;
  const current = images[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % total);
      if (event.key === 'ArrowLeft') onIndexChange((index - 1 + total) % total);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [index, total, onClose, onIndexChange]);

  if (!current) return null;

  const showPrevious = (event: MouseEvent) => {
    event.stopPropagation();
    onIndexChange((index - 1 + total) % total);
  };

  const showNext = (event: MouseEvent) => {
    event.stopPropagation();
    onIndexChange((index + 1) % total);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} image viewer`}
      className="fixed inset-0 z-[60] flex flex-col bg-charcoal-900/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <div className="text-ivory-100">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{current.category}</p>
          <p className="mt-1 font-serif text-xl">{current.title}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/30 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-400"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-14 sm:px-20">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-full max-w-full rounded-sm object-contain animate-fade-in"
        />
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 transition-colors hover:bg-gold-500 hover:text-charcoal-900 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 transition-colors hover:bg-gold-500 hover:text-charcoal-900 sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <p className="py-6 text-center text-xs tracking-wide text-ivory-200/70">
        {index + 1} / {total} &middot; Illustrative image
      </p>
    </div>
  );
}
