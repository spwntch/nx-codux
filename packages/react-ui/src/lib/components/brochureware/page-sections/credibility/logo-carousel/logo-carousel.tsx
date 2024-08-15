import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { cn } from '../../../../../utils';
import { Carousel, CarouselContent, CarouselItem } from '../../../../shadcn-ui';

export interface LogoCarouselProps {
  title?: string;
  logos: string[];
  className?: string;
}

export const LogoCarousel: React.FC<LogoCarouselProps> = ({
  title,
  logos,
  className,
}) => {
  const plugin = useRef(Autoplay({ delay: 0, jump: false }));
  if (!logos?.length) return null;
  const carouselOptions = { loop: true, duration: 10000 };

  return (
    <Carousel
      className={cn('w-screen mx-auto', className)}
      opts={carouselOptions}
      plugins={[plugin.current]}
    >
      {title && <h2 className="text-primary text-center">{title}</h2>}
      <CarouselContent className="py-3">
        {logos.map((logo, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 "
          >
            <div className="p-4">
              < img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LogoCarousel;
