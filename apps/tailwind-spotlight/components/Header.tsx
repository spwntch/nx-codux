'use client';

import { useEffect, useRef } from 'react';

import { updateDocumentHeaderStyles } from '../utils';
import { Avatar } from './avatar/Avatar';
import { AvatarContainer } from './avatar/AvatarContainer';
import { Container } from './Container';
import { DesktopNav } from './desktop-nav/DesktopNav';
import { MobileNav } from './mobile-nav/MobileNav';
import { ThemeToggle } from './theme-toggle/theme-toggle';

export function Header() {
  const headerRef = useRef<React.ElementRef<'div'>>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    function updateStyles() {
      updateDocumentHeaderStyles(headerRef, isInitial, { down: 0, up: 64 });
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener('scroll', updateStyles, { passive: true });
    window.addEventListener('resize', updateStyles);

    return () => {
      window.removeEventListener('scroll', updateStyles);
      window.removeEventListener('resize', updateStyles);
    };
  }, []);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position:
              'var(--header-position)' as React.CSSProperties['position'],
          }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position:
                'var(--header-inner-position)' as React.CSSProperties['position'],
            }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNav className="pointer-events-auto md:hidden" />
                <DesktopNav className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
