import { INavItem } from '@spwntch/react-ui';

export const NAV: INavItem[] = [
  // { label: 'Home', href: '/' },
  {
    label: 'Products',
    children: [
      {
        label: 'AI Apowered ICP Generator',
        description: 'Create precise customer profiles instantly with our custom AI models.',
        href: '/products/icp-generator',
      },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  // {
  //   label: 'Free Resources',
  //   href: '#resources',
  // },
  // { label: 'Get Started', href: '#get-started' },
];
