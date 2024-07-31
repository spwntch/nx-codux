import { PropsWithChildren } from 'react';
import { cn } from '../../../../utils';
import { RegularFooter, UnderConstructionFooter } from '../../footer';
import { DesktopTopNavbar } from '../../nav';

export interface SiteShellProps {
  navbar: {
    floating?: boolean;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    disableThemeToggle?: boolean;
    className?: string;
  };
  underContruction?: boolean;
  githubUrl?: string;
  onNavbarLinkTo: (href: string) => void;
}

export const SiteShellStarter = ({
  underContruction,
  navbar,
  githubUrl,
  onNavbarLinkTo,
  children,
}: SiteShellProps & PropsWithChildren) => {
  return (
    <>
      <DesktopTopNavbar
        floating={navbar.floating}
        className={cn(
          navbar.floating ? 'bg-transparent w-full' : 'bg-background',
          navbar?.className
        )}
        navAlignment={navbar?.alignment}
        logoHeight={navbar?.logoHeight}
        disableThemeToggle={navbar?.disableThemeToggle}
        githubUrl={githubUrl}
        onLinkTo={onNavbarLinkTo}
      />

      <main className=" relative -top-[100px]">{children}</main>
      {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
    </>
  );
};

export default SiteShellStarter;
