'use client';
import {
  IShellProviderProps,
  ShellProvider,
  SiteShellStarter,
} from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export interface SiteShellProps extends IShellProviderProps {
  navbar: {
    floating?: boolean;
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    disableThemeToggle?: boolean;
  };
  underContruction?: boolean;
  githubUrl?: string;
}

export const SiteShell = ({
  brand,
  navItems,
  underContruction,
  navbar,
  githubUrl,
  children,
}: SiteShellProps & PropsWithChildren) => {
  const router = useRouter();
  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <ShellProvider brand={brand} navItems={navItems}>
      <SiteShellStarter
        navbar={navbar}
        underContruction={underContruction}
        githubUrl={githubUrl}
        onNavbarLinkTo={handleLinkTo}
      >
        {children}
      </SiteShellStarter>
    </ShellProvider>
  );
};

export default SiteShell;
