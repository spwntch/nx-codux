import { Shell } from '../components/shell';
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
    logoHeight: 60,
    navItems: primaryNav
  };
  return (
    <html lang="en">
      <body>
        <Shell brand={brand} navbar={navbar} underContruction>
        {children}
        </Shell>
      </body>
    </html>
  );
}
