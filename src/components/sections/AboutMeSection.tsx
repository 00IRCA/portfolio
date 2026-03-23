import Section from '../ui/Section';
import { SECTION_IDS } from '@/src/constants/sections';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: 'Full Stack', label: 'Specialization' },
  { value: 'Remote Ready', label: 'Work Style' },
];

export default function AboutMeSection() {
  return (
    <Section id={SECTION_IDS.aboutMe} title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-3 flex flex-col gap-4 text-lg leading-relaxed text-foreground/80">
          <p>
            I&apos;m a Full Stack Developer with over 3 years of professional experience building
            modern web applications. I started coding in mid-2020 and haven&apos;t stopped since — I
            approach every project as a problem to understand first and code second.
          </p>
          <p>
            I specialize in crafting responsive, high-quality interfaces where design and
            functionality meet. One of my proudest projects was building a full UI from scratch to
            configure voice control for IoT devices — a complex, user-facing feature that required
            close attention to both UX detail and technical precision.
          </p>
          <p>
            What drives me is the challenge of turning a hard problem into something that feels
            effortless to use. I care deeply about UI quality, clean code, and the experience of the
            person on the other side of the screen.
          </p>
          <p className="border-l-4 border-primary pl-4 italic text-foreground/60">
            I&apos;m currently open to new opportunities — remote or hybrid — where I can keep
            growing and contribute to a team that values craft.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 p-6 rounded-xl border border-foreground/10 bg-foreground/3 text-center"
            >
              <span className="text-2xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-foreground/60 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
