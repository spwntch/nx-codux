import { useMediaQuery } from '@react-hooks-library/core';
import React, { forwardRef } from 'react';
import { cn } from '../../../../utils';
import { ButtonGroup, GithubButton } from '../../../components';
import { Logo } from '../../brand';
import { ThemeToggleButton } from '../../buttons';
import { MobileNavDrawer } from '../mobile-nav-drawer/mobile-nav-drawer';
import { NavToolbar } from '../nav-toolbar/nav-toolbar';
import { Button } from '../../../shadcn-ui';

interface IDesktopTopNavbarProps extends React.HTMLAttributes<HTMLElement> {
  floating?: boolean;
  className?: string;
  logoHeight?: number;
  navAlignment?: 'start' | 'center' | 'end';
  disableThemeToggle?: boolean;
  githubUrl?: string;
  onLinkTo: (href: string) => void;
}

export const DesktopTopNavbar = forwardRef<HTMLElement, IDesktopTopNavbarProps>(
  (
    {
      floating,
      className,
      logoHeight,
      navAlignment,
      disableThemeToggle = false,
      githubUrl,
      onLinkTo,
      ...props
    },
    ref
  ) => {
    const isMobile = useMediaQuery('(max-width: 640px)');

    return (
      <header
        className={cn('sticky top-0 z-50', className)}
        ref={ref}
        {...props}
      >
        <nav className="flex p-4 lg:p-6 items-center justify-between">
          <Logo
            height={logoHeight || 36}
            className="cursor-pointer "
            onClick={() => onLinkTo('/')}
            variant={isMobile ? 'mark' : 'logo'}
          />
          <div className="flex-1">
            <nav
              className={cn(
                'hidden lg:flex mx-10',
                navAlignment === 'start'
                  ? 'justify-start'
                  : navAlignment === 'end'
                  ? 'justify-end'
                  : 'justify-center'
              )}
            >
              <NavToolbar floating={floating} onLinkTo={onLinkTo} />
            </nav>
          </div>
          <div>
            <Button>GET STARTED</Button>
          </div>
          <div className="ml-8">
            <ButtonGroup>
              {!disableThemeToggle && <ThemeToggleButton />}
            </ButtonGroup>
          </div>
          <div>{githubUrl && <GithubButton url={githubUrl} />}</div>
          <div className="block lg:hidden">
            <ButtonGroup>
              <MobileNavDrawer onLinkTo={onLinkTo} />
            </ButtonGroup>
          </div>
        </nav>
      </header>
    );
  }
);

DesktopTopNavbar.displayName = 'DesktopTopNavbar';
