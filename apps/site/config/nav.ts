import { INavItem } from '@/ui';

export const primaryNav: INavItem[] = [
  { label: 'Our Backstory', href: '/about' },
  { label: 'Docs', href: '/docs' },
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        description: 'ipsum lorem and that sh*t',
        href: '/blog',
      },
      {
        label: 'Case Studies',
        description: 'ipsum lorem and that sh*t',
        href: '/case-studies',
      },
      {
        label: 'White Papers',
        description: 'ipsum lorem and that sh*t',
        href: '/white-papers',
      },
    ],
  },
  { label: 'Hire Us', href: '/services' },
];
