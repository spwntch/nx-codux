'use client';
import { LogoCarousel as SpwnLogoCarousel } from '@spwntch/react-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILogoCarouselProps {
  title?: string;
  logos: string[];
}

const LogoCarousel = ({ title, logos }: ILogoCarouselProps) => {
  return <SpwnLogoCarousel title={title} logos={logos} />;
};

export default LogoCarousel;
