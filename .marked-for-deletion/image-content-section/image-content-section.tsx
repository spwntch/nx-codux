import React from 'react';
import { IContent, IImage } from '../../../../types';
import { cn } from '../../../../utils';
import { ContentContainer, ImageContainer } from '../../../brochureware';
import { Button } from '../../../shadcn-ui';
import ButtonGroup from '../../button-group/button-group';

interface IImageContentBlockProps {
  image: IImage;
  innerContent?: IContent;
  className?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  height?: number;
  hero?: boolean;
}

export const ImageContentSection: React.FC<IImageContentBlockProps> = ({
  image,
  innerContent,
  hAlign,
  vAlign,
  className,
  height = 540,
  hero = false,
}) => {
  return (
    <div
      className={cn('w-full isolate relative', hero && 'h-[calc(100vh-72px)]')}
      style={!hero ? { height: `${height}px` } : undefined}
    >
      <ImageContainer image={image}>
        {innerContent && (
          <ContentContainer
            text={innerContent}
            hero={hero}
            hAlign={hAlign}
            vAlign={vAlign}
            className={className}
          >
            {innerContent.ctas?.length && (
              <ButtonGroup>
                {innerContent.ctas.map((cta) => (
                  <Button
                    size={cta.variant?.size || 'default'}
                    variant={cta.variant?.variant || 'default'}
                  >
                    {cta.label}
                  </Button>
                ))}
              </ButtonGroup>
            )}
          </ContentContainer>
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageContentSection;
