type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-gold-400' : 'text-gold-700'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-serif text-4xl leading-[1.2] sm:text-5xl ${isDark ? 'text-ivory-100' : 'text-charcoal-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-[1.6] sm:text-lg ${isDark ? 'text-ivory-200/80' : 'text-charcoal-600'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
