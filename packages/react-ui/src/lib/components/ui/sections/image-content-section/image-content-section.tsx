import React from 'react';
import { IContent, IImage } from '../../../../types';
import { cn } from '../../../../utils';
import { ContentContainer, ImageContainer } from '../../containers';

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
      className={cn('w-full', hero && 'h-screen', className)}
      style={!hero ? { height: `${height}px` } : undefined}
    >
      <ImageContainer image={image}>
        {innerContent && (
          <ContentContainer
            innerContent={innerContent}
            hAlign={hAlign}
            vAlign={vAlign}
          />
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageContentSection;
