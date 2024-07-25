import { MutableRefObject, RefObject } from 'react';

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

export function setDocumentProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

export function removeDocumentProperty(property: string) {
  document.documentElement.style.removeProperty(property);
}

export function updateDocumentHeaderStyles(
  headerRef: RefObject<HTMLDivElement>,
  isInitial: MutableRefObject<boolean>,
  delay: { up: number; down: number } = { up: 0, down: 0 }
) {
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

  setDocumentProperty('--content-offset', `${delay.down}px`);

  if (isInitial.current || scrollY < delay.down) {
    setDocumentProperty('--header-height', `${delay.down + height}px`);
    setDocumentProperty('--header-mb', `${-delay.down}px`);
  } else if (top + height < -delay.up) {
    const offset = Math.max(height, scrollY - delay.up);
    setDocumentProperty('--header-height', `${offset}px`);
    setDocumentProperty('--header-mb', `${height - offset}px`);
  } else if (top === 0) {
    setDocumentProperty('--header-height', `${scrollY + height}px`);
    setDocumentProperty('--header-mb', `${-scrollY}px`);
  }

  if (top === 0 && scrollY > 0 && scrollY >= delay.down) {
    setDocumentProperty('--header-inner-position', 'fixed');
    removeDocumentProperty('--header-top');
    removeDocumentProperty('--avatar-top');
  } else {
    removeDocumentProperty('--header-inner-position');
    setDocumentProperty('--header-top', '0px');
    setDocumentProperty('--avatar-top', '0px');
  }
}
