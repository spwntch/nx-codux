import { GoogleAnalytics } from '@/react-tracking';
import { brand, primaryNav } from '../config';
import './global.css';
import { SiteShell } from '@/next-marketing-pages';

export const metadata = {
  metadataBase:
    (process.env.NEXT_PUBLIC_SITE_URL &&
      new URL(process.env.NEXT_PUBLIC_SITE_URL)) ||
    '',
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
    <html lang="en">
      <body>
        <SiteShell brand={brand} navItems={primaryNav} navbar={navbar}>
          {children}
          <GoogleAnalytics />
        </SiteShell>
      </body>
    </html>
  );
}
