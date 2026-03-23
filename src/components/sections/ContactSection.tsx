import Section from '../ui/Section';
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
      </div>
    </Section>
  );
}
