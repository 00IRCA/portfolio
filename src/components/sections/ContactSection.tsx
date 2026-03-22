import Section from '../ui/Section';
import SocialLink from '../ui/SocialLink';
import ContactForm from '../ui/ContactForm';
import { SECTION_IDS } from '@/src/constants/sections';

export default function ContactSection() {
  return (
    <Section id={SECTION_IDS.contact} title="Contact">
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-lg max-w-xl text-foreground/70">
          I&apos;m open to new opportunities. Whether you have a project in mind or just want to
          connect, feel free to reach out.
        </p>

        <ContactForm />

        <a
          href="mailto:00ircarlin@gmail.com"
          className="inline-block px-8 py-3 bg-primary text-background font-semibold rounded hover:opacity-90 transition-opacity duration-200"
        >
          00ircarlin@gmail.com
        </a>

        <div className="flex flex-row gap-4">
          <SocialLink
            href="https://www.linkedin.com/in/ismael-ruiz-carlin/"
            label="LinkedIn"
            icon="/linkedin.png"
          />
        </div>
      </div>
    </Section>
  );
}
