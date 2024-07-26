import { SiteShell } from '@/next-shell';
import { brand, primaryNav } from '../config';
import './global.css';

export const metadata = {
  title: 'Welcome to txb',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = {
    logoHeight: 40,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <SiteShell
          brand={brand}
          navItems={primaryNav}
          navbar={navbar}
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
