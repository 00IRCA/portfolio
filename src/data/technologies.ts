export type TechLevel = 'experienced' | 'familiar';

export interface Technology {
  name: string;
  icon: string;
  lightInvert?: boolean;
  level: TechLevel;
}

export const technologies: Technology[] = [
  { name: 'JavaScript', icon: '/technologies/javascript.png', level: 'experienced' },
  { name: 'TypeScript', icon: '/technologies/typescript.svg', level: 'experienced' },
  { name: 'React', icon: '/technologies/react.svg', level: 'experienced' },
  { name: 'Redux', icon: '/technologies/redux.svg', level: 'experienced' },
  { name: 'Node.js', icon: '/technologies/node.js.svg', level: 'experienced' },
  {
    name: 'Express.js',
    icon: '/technologies/express.js.svg',
    lightInvert: true,
    level: 'experienced',
  },
  { name: 'Bootstrap', icon: '/technologies/bootstrap.svg', level: 'experienced' },
  { name: 'Tailwind CSS', icon: '/technologies/tailwind.svg', level: 'experienced' },
  { name: 'Sass', icon: '/technologies/sass.svg', level: 'experienced' },
  { name: 'AWS', icon: '/technologies/aws.svg', level: 'experienced' },
  { name: 'Git', icon: '/technologies/git.svg', level: 'experienced' },
  { name: 'Next.js', icon: '/technologies/next.js.svg', level: 'familiar' },
  { name: 'PHP', icon: '/technologies/php.svg', level: 'familiar' },
  { name: 'Laravel', icon: '/technologies/laravel.svg', level: 'familiar' },
  { name: 'MySQL', icon: '/technologies/mysql.svg', level: 'familiar' },
  { name: 'Vue', icon: '/technologies/vue.svg', level: 'familiar' },
  { name: 'Ruby', icon: '/technologies/ruby.svg', level: 'familiar' },
];
