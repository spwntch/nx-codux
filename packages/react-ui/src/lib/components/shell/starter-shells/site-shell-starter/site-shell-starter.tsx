import { PropsWithChildren } from 'react';
import { RegularFooter, UnderConstructionFooter } from '../../footer';
import { DesktopTopNavbar } from '../../nav';
import { cn } from '../../../../utils';

export interface SiteShellProps {
  navbar: {
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
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
    <div className="h-screen flex flex-col">
      <DesktopTopNavbar
        classNames={cn(navbar?.classNames, 'bg-background')}
        navAlignment={navbar?.alignment}
        logoHeight={navbar?.logoHeight}
        githubUrl={githubUrl}
        onLinkTo={onNavbarLinkTo}
      />

      <main className="flex-1">{children}</main>
      {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
    </div>
  );
};

export default SiteShellStarter;
