import { DesktopTopNavbar, IBrand, INavItem, ShellProvider } from '@/react-ui';
import { createBoard } from '@wixc3/react-board';

const brand: IBrand = {
  logoUrl: {
    light: '/spwn/brand/public/logo-primary.webp',
    dark: '/spwn/brand/public/logo-dark.webp',
  },
  markUrl: {
    light: '/spwn/brand/public/mark-primary.webp',
    dark: '/spwn/brand/public/mark-dark.webp',
  },
  underConstructionUrl: {
    light: '/spwn/under-construction/public/powered-by-spawntech-primary.webp',
    dark: '/spwn/under-construction/public/powered-by-spawntech-dark.webp',
  },
  tagline: '{ experience in code }',
  about: {
    body: [
      'Spawntech specializes in agile software development with a robust UX focus, leveraging reusable Node.js libraries to deliver custom, efficient solutions. We champion innovation and a seamless user experience, ensuring our clients stay ahead in the digital race.',
    ],
  },
  contact: {
    website: 'www.spawntech.io', // Placeholder, adjust as necessary
    mail: 'hello@spawntech.io', // Placeholder, adjust as necessary
    phone: '+27 11 994 9960', // Placeholder, adjust as necessary
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/spawntech-io',
    // youtube: 'https://www.youtube.com',
    // facebook: 'https://www.facebook.com',
  },
  legal: {
    companyName: 'Spawntech',
    copyrightYear: '2024',
  },
};

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

export default createBoard({
  name: 'App Shell',
  Board: () => {
    const handleLinkTo = (url: string) => {
      console.log(url);
    };
    return (
      <ShellProvider brand={brand} navItems={primaryNav}>
        <div className="h-screen w-screen flex flex-col">
          <DesktopTopNavbar
            navAlignment="center"
            logoHeight={60}
            githubUrl="https://github.com/spwntch/nx-codux"
            onLinkTo={handleLinkTo}
          />

          <main className="flex-1">ping.</main>
          <div>hi</div>
          {/* {underContruction ? <UnderConstructionFooter /> : <RegularFooter />} */}
        </div>
      </ShellProvider>
    );
  },
  isSnippet: true,
  environmentProps: {
    windowWidth: 1116,
    windowHeight: 768,
  },
});
