import Section from '../ui/Section';
import ContactForm from '../ui/ContactForm';
import { SECTION_IDS } from '@/src/constants/sections';

export default function ContactSection() {
  return (
    <Section id={SECTION_IDS.contact} title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <ContactForm />

        <div className="flex flex-col gap-6 lg:pt-6">
          <p className="text-lg text-foreground/70">
            I&apos;m open to new opportunities. Whether you have a project in mind or just want to
            connect, feel free to reach out.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/ismael-ruiz-carlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors duration-200 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-foreground/10 bg-foreground/3 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-200 text-lg">
                in
              </span>
              <span>LinkedIn {'->'}</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
