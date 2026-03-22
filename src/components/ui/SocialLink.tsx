import Image from 'next/image';

interface Props {
  href: string;
  label: string;
  icon: string;
}

export default function SocialLink({ href, label, icon }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex flex-row items-center p-3 bg-background text-2xl shadow-sm rounded hover:ring-primary hover:ring hover:shadow-primary hover:shadow-sm  transition-all duration-200"
    >
      <Image width={200} height={200} alt="" aria-hidden="true" src={icon} className="w-12" />
      <span>{label}</span>
    </a>
  );
}
