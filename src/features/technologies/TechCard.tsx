import Image from 'next/image';

interface Props {
  name: string;
  icon: string;
  lightInvert?: boolean;
}

export default function TechCard({ name, icon, lightInvert }: Props) {
  return (
    <div className="group h-full flex flex-col items-center justify-center gap-3 p-5 rounded-xl border border-foreground/10 bg-foreground/3 hover:bg-foreground/8 hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(64,198,255,0.12)] transition-all duration-200 cursor-default">
      <Image
        width={44}
        height={44}
        src={icon}
        alt=""
        aria-hidden="true"
        unoptimized
        className={`object-contain shrink-0 group-hover:scale-110 transition-transform duration-200${lightInvert ? ' theme-invert' : ''}`}
      />
      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}
