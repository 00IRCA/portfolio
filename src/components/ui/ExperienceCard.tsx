interface Props {
  position: string;
  company: string;
  url?: string;
  startYear: string;
  endYear: string;
  description: string[];
  technologies?: string[];
}

export default function ExperienceCard({
  position,
  company,
  url,
  startYear,
  endYear,
  description,
  technologies = [],
}: Props) {
  return (
    <div className="relative border border-foreground/10 bg-foreground/3 p-6 pl-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(64,198,255,0.15)] hover:border-primary/30 group">
      {/* Left accent bar */}
      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h2 className="text-xl font-bold text-primary">{position}</h2>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold hover:text-primary transition-colors duration-200"
            >
              {company} {'->'}
            </a>
          ) : (
            <p className="text-base font-semibold">{company}</p>
          )}
        </div>
        <span className="shrink-0 text-sm px-3 py-1 rounded-full border border-foreground/15 text-foreground/50 bg-foreground/5 self-start">
          {startYear} - {endYear}
        </span>
      </div>

      <ul className="mt-2 flex flex-col gap-1 text-foreground/70">
        {description.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary">{'>'}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary bg-primary/5 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
