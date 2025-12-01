const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  tone = 'dark',
}) => {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';
  const isLight = tone === 'light';
  const titleColor = isLight ? 'text-grisOscuro' : 'text-white';
  const subtitleColor = isLight ? 'text-grisMedio' : 'text-grisClaro';
  const eyebrowColor = isLight ? 'text-grisMedio' : 'text-grisClaro';

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs uppercase tracking-[0.4em] ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base sm:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

