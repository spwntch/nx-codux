import React from 'react';
import { cn } from '../../../../utils';
import { Tags } from '../tags/tags';
// import { Tags } from '../../content/tags/tags';

interface IHeaderProps {
  titleContent?: string;
  titleClassName?: string;
  subTitleContent?: string;
  subTitleClassName?: string;
  tagsContent?: string[];
  tagsClassName?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const Header: React.FC<IHeaderProps> = ({
  titleContent,
  titleClassName,
  subTitleContent,
  subTitleClassName,
  tagsContent,
  tagsClassName,
  alignment = 'center',
}) => (
  <div
    className={cn('mt-2 mb-4', {
      'text-left': alignment === 'left',
      'text-center': alignment === 'center',
      'text-right': alignment === 'right',
    })}
  >
    {titleContent && (
      <h2 className={cn('text-2xl font-bold mb-2 mt-6', titleClassName)}>
        {titleContent}
      </h2>
    )}
    {subTitleContent && (
      <h3 className={cn('text-xl font-semibold mb-2 mt-4', subTitleClassName)}>
        {subTitleContent}
      </h3>
    )}
    {tagsContent && (
      <Tags
        tags={tagsContent}
        className={cn(
          'mt-4',
          {
            'justify-start': alignment === 'left',
            'justify-center': alignment === 'center',
            'justify-end': alignment === 'right',
          },
          tagsClassName
        )}
      />
    )}
  </div>
);

export default Header;
