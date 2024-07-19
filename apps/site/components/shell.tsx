'use client';
import { DesktopTopNavbar, IBrand, INavItem, ShellProvider } from '@/react-ui';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export interface ShellProps {
  brand: IBrand;
  underContruction?: boolean;
  navbar?: {
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    navItems: INavItem[]
  };
  githubUrl?: string;
}

export const Shell = ({
  brand,
  underContruction,
  navbar,
  githubUrl,
  children,
}: ShellProps & PropsWithChildren) => {
  const router = useRouter();

  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <ShellProvider brand={brand} navItems={navbar?.navItems}>
      <div className="h-screen ">
        <DesktopTopNavbar
          classNames={`${navbar?.classNames} bg-background`}
          navAlignment={navbar?.alignment}
          logoHeight={navbar?.logoHeight}
          githubUrl={githubUrl}
          onLinkTo={handleLinkTo}
        />

        <main>{children}</main>
        {/* {underContruction ? <UnderConstructionFooter /> : <RegularFooter />} */}
      </div>
    </ShellProvider>
  );
};
