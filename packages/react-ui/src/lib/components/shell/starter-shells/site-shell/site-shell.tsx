import { PropsWithChildren } from 'react';
import { IBrand, INavItem } from '../../../../types';
import { ShellProvider } from '../../../../providers';
import { DesktopTopNavbar } from '../../nav';
import { RegularFooter, UnderConstructionFooter } from '../../footer';

export interface SiteShellProps {
  brand: IBrand;
  navbar: {
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    navItems: INavItem[];
  };
  underContruction?: boolean;
  githubUrl?: string;
}

export const SiteShell = ({
  brand,
  underContruction,
  navbar,
  githubUrl,
  children,
}: SiteShellProps & PropsWithChildren) => {
  const handleLinkTo = (url: string) => {
    console.log({ url });
    // router.push(url);
  };
  
  return (
    <ShellProvider brand={brand} navItems={navbar?.navItems}>
      <div className="h-screen flex flex-col">
        <DesktopTopNavbar
          classNames={`${navbar?.classNames} bg-background`}
          navAlignment={navbar?.alignment}
          logoHeight={navbar?.logoHeight}
          githubUrl={githubUrl}
          onLinkTo={handleLinkTo}
        />

        <main className="flex-1">{children}</main>
        {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
      </div>
    </ShellProvider>
  );
};

export default SiteShell;
