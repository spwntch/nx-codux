import { PropsWithChildren, useState } from 'react';
import { cn } from '../../../../utils';
import { RegularFooter, UnderConstructionFooter } from '../../footer';
import { DesktopTopNavbar } from '../../nav';

export interface SiteShellProps {
  navbar: {
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    autoHide?: boolean;
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
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });

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
