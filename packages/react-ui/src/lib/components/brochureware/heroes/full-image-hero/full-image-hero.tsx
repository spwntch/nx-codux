import { forwardRef, HTMLAttributes } from 'react';
import { IContent, IImage } from '../../../../types';
import { cn } from '../../../../utils';
import { ButtonGroup } from '../../../components';
import { Button } from '../../../shadcn-ui';
import { ContentContainer, ImageContainer } from '../../containers';

export interface IFullImageHeroProps extends HTMLAttributes<HTMLDivElement> {
  image: IImage;
  innerContent: IContent;
  height?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
}

export const FullImageHero = forwardRef<HTMLDivElement, IFullImageHeroProps>(
  (
    { image, innerContent, height, hAlign, vAlign, className, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          'w-full isolate relative',
          height ? `h-[${height}]` : 'h-[calc(100vh-100px)]',
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
            vAlign={vAlign}
            className={className}
          >
            {innerContent.ctas?.length && (
              <ButtonGroup stacked>
                {innerContent.ctas.map((cta, index) => (
                  <Button
                  
                    key={index}
                    size={cta.variant?.size || 'default'}
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
