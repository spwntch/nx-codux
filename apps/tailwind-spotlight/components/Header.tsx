'use client';

import { useEffect, useRef } from 'react';

import { Avatar } from './avatar/Avatar';
import { AvatarContainer } from './avatar/AvatarContainer';
import { Container } from './Container';
import { DesktopNav } from './desktop-nav/DesktopNav';
import { MobileNav } from './mobile-nav/MobileNav';
import { ThemeToggle } from './theme-toggle/theme-toggle';
import { removeDocumentProperty, setDocumentProperty } from '../utils';

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export function Header() {
  const headerRef = useRef<React.ElementRef<'div'>>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    const downDelay = 0;
    const upDelay = 64;

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return;
      }

      const { top, height } = headerRef.current.getBoundingClientRect();
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setDocumentProperty('--header-position', 'sticky');
      }

      setDocumentProperty('--content-offset', `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setDocumentProperty('--header-height', `${downDelay + height}px`);
        setDocumentProperty('--header-mb', `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setDocumentProperty('--header-height', `${offset}px`);
        setDocumentProperty('--header-mb', `${height - offset}px`);
      } else if (top === 0) {
        setDocumentProperty('--header-height', `${scrollY + height}px`);
        setDocumentProperty('--header-mb', `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setDocumentProperty('--header-inner-position', 'fixed');
        removeDocumentProperty('--header-top');
        removeDocumentProperty('--avatar-top');
      } else {
        removeDocumentProperty('--header-inner-position');
        setDocumentProperty('--header-top', '0px');
        setDocumentProperty('--avatar-top', '0px');
      }
    }

    function updateStyles() {
      updateHeaderStyles();
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
