import React, { PropsWithChildren, forwardRef } from 'react';
import { IImage } from '../../../../types';
import { cn } from '../../../../utils';

export interface IBackgroundImageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
  image: IImage;
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  blur?: 'edges' | boolean;
}

export const ImageContainer = forwardRef<
  HTMLDivElement,
  IBackgroundImageContainerProps
>(({ className, image, rounded, blur, children, ...props }, ref) => {
  const { src, alt, darken, attribution } = image;
  return (
    <div
      className={cn('relative h-full w-full', className)}
      ref={ref}
      {...props}
    >
      <img
        src={src}
        alt={alt || `website image with src: ${src}`}
        className={cn(
          'absolute inset-0 -z-10 h-full w-full object-cover',
          rounded === 'xs' && 'rounded-sm',
          rounded === 'sm' && 'rounded-md',
          rounded === 'md' && 'rounded-lg',
          rounded === 'lg' && 'rounded-xl',
          rounded === 'xl' && 'rounded-2xl',
          rounded === 'xxl' && 'rounded-3xl',
          rounded === 'full' && 'rounded-full',
          darken === '25%' && 'brightness-75',
          darken === '50%' && 'brightness-50',
          darken === '75%' && 'brightness-[25%]',
          blur === 'edges'
            ? 'filter blur-none'
            : blur === true && 'filter blur-md'
        )}
        style={
          blur === 'edges'
            ? {
                maskImage:
                  'radial-gradient(ellipse at center, rgba(0, 0, 0, 1) 60%, transparent 100%)',
                maskSize: 'cover',
                maskRepeat: 'no-repeat',
              }
            : {}
        }
      />
      {attribution?.photographer && attribution?.url && (
        <div
          className={`absolute bottom-2 right-1 text-xs pb-1 pr-6 text-white z-50`}
        >
          Photo by{' '}
          <a
            href={attribution?.photographer.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {attribution?.photographer.name}
          </a>{' '}
          on{' '}
          <a href={attribution?.url} target="_blank" rel="noreferrer noopener">
            Unsplash
          </a>
        </div>
      )}
      <div className="relative h-full w-full ">{children}</div>
    </div>
  );
});

ImageContainer.displayName = 'BackgroundImageContainer';

export default ImageContainer;
