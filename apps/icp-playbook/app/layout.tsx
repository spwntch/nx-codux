import { SiteShell } from '@/next-shell';
import { ParapgraphsWithClassName, TextWithClassName } from '@spwntch/react-ui';
import { brand, HOME_HERO_CONTENT, primaryNav } from '../config';
import './global.css';

export const metadata = {
  title: 'ICP Playbook | Interact RDT',
  description: `${(HOME_HERO_CONTENT.title as TextWithClassName).content} - ${
    (HOME_HERO_CONTENT.body as ParapgraphsWithClassName).content[0]
  }`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = {
    floating: true,
    logoHeight: 52,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell brand={brand} navItems={primaryNav} navbar={navbar}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
