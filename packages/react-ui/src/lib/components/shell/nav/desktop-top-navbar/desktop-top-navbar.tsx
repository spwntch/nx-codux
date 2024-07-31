import { useMediaQuery } from '@react-hooks-library/core';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { forwardRef, useState } from 'react';
import { cn } from '../../../../utils';
import { ButtonGroup, GithubButton } from '../../../components';
import { Button } from '../../../shadcn-ui';
import { Logo } from '../../brand';
import { ThemeToggleButton } from '../../buttons';
import { MobileNavDrawer } from '../mobile-nav-drawer/mobile-nav-drawer';
import { NavToolbar } from '../nav-toolbar/nav-toolbar';

interface IDesktopTopNavbarProps extends React.HTMLAttributes<HTMLElement> {
  floating?: boolean;
  className?: string;
  logoHeight?: number;
  navAlignment?: 'start' | 'center' | 'end';
  cta?: {
    label: string;
    onCta: () => void;
  };
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
      cta,
      disableThemeToggle = false,
      githubUrl,
      onLinkTo,
      ...props
    },
    ref
  ) => {
    const isMobile = useMediaQuery('(max-width: 640px)');
    const { scrollY } = useScroll();
    const [hideNavbar, setHideNavbar] = useState(false);
    const [initialNavbar, setInitialNavbar] = useState(true);
    useMotionValueEvent(scrollY, 'change', (y) => {
      if (y < 100) setInitialNavbar(true);
      else setInitialNavbar(false);
      const prevY = scrollY.getPrevious() || 0;
      if (y > prevY && y > 50) setHideNavbar(true);
      else setHideNavbar(false);
      console.log(y, prevY);
    });

    return (
      <motion.nav
        variants={{
          initial: { y: 0 },
          solid: {
            y: 0,
            backgroundColor: 'hsl(var(--background))',
            borderBottom: '1px solid hsl(var(--foreground))',
          },
          hidden: { y: '-100%' },
        }}
        animate={hideNavbar ? 'hidden' : initialNavbar ? 'initial' : 'solid'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'sticky top-0 z-50 flex p-4 lg:p-6 items-center justify-between',
          className
        )}
        ref={ref}
        // {...props}
      >
        <Logo
          height={logoHeight || 36}
          className="cursor-pointer"
          onClick={() => onLinkTo('/')}
          variant={isMobile ? 'mark' : 'logo'}
        />
        <NavToolbar
          alignment={navAlignment}
          floating={floating}
          onLinkTo={onLinkTo}
          className="flex-1"
        />
        <ButtonGroup>
          {cta && <Button onClick={cta?.onCta}>GET STARTED</Button>}
          {!disableThemeToggle && <ThemeToggleButton />}
          {githubUrl && <GithubButton url={githubUrl} />}
          {isMobile && <MobileNavDrawer onLinkTo={onLinkTo} />}
        </ButtonGroup>
      </motion.nav>
    );
  }
);

DesktopTopNavbar.displayName = 'DesktopTopNavbar';
