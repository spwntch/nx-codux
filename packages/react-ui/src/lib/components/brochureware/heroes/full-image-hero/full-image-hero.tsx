import { useMediaQuery } from '@react-hooks-library/core';
import { forwardRef, HTMLAttributes } from 'react';
import { IContent, IImage } from '../../../../types';
import { cn } from '../../../../utils';
import { ButtonGroup } from '../../../components';
import { Button } from '../../../shadcn-ui';
import { ContentContainer, ImageContainer } from '../../containers';

export interface IFullImageHeroProps extends HTMLAttributes<HTMLDivElement> {
  navbarHeight?: number;
  image: IImage;
  innerContent: IContent;
  height?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
}

export const FullImageHero = forwardRef<HTMLDivElement, IFullImageHeroProps>(
  (
    {
      navbarHeight,
      image,
      innerContent,
      height,
      hAlign,
      vAlign,
      className,
      ...props
    },
    ref
  ) => {
    const isMobile = useMediaQuery('(max-width: 640px)');
    return (
      <div
        className={cn(
          'w-full isolate relative',
          height
            ? `h-[${height}]`
            : navbarHeight
            ? `h-[calc(100vh-${navbarHeight}px)]`
            : 'h-screen',
          className
        )}
        ref={ref}
        {...props}
      >
        <ImageContainer image={image}>
          <ContentContainer
            innerContent={innerContent}
            hero={true}
            hAlign={hAlign}
            vAlign={isMobile ? 'middle' : vAlign}
            className={cn(isMobile && 'items-center', className)}
          >
            {innerContent.ctas?.length && (
              <ButtonGroup stacked={isMobile}>
                {innerContent.ctas.map((cta, index) => (
                  <Button
                    key={index}
                    size={isMobile ? 'default' : cta.variant?.size || 'default'}
                    variant={cta.variant?.variant || 'default'}
                  >
                    {cta.label}
                  </Button>
                ))}
              </ButtonGroup>
            )}
          </ContentContainer>
        </ImageContainer>
      </div>
    );
  }
);

export default FullImageHero;
