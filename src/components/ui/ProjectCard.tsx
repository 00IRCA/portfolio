import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies = [],
  imageUrl,
  liveUrl,
  repoUrl,
}: Props) {
  return (
    <div className="flex flex-col border border-foreground/10 bg-foreground/3 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(64,198,255,0.15)] hover:border-primary/30 group">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={192}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-36 bg-linear-to-br from-primary/20 via-primary/8 to-transparent flex items-center justify-center overflow-hidden relative">
          <span className="absolute text-8xl font-black text-primary/10 tracking-tighter select-none leading-none">
            {title.toUpperCase()}
          </span>
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="mt-2 text-foreground/70 leading-relaxed flex-1">{description}</p>
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
        {(liveUrl || repoUrl) && (
          <div className="mt-5 flex gap-4 pt-4 border-t border-foreground/8">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                Live <ExternalLink size={14} />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                GitHub <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
