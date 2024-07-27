import React from 'react';
import { cn } from '../../../../utils';
import { Tags } from '../../../components';
import HeaderTitle from './components/header-title';
import HeaderHeading from './components/header-heading';
import HeaderSubheading from './components/header-subheading';
// import { Tags } from '../../content/tags/tags';

interface IBasicSectionHeaderProps {
  hero?: boolean;
  titleContent?: string;
  titleClassName?: string;
  headingContent?: string;
  headingClassName?: string;
  subheadingContent?: string;
  subheadingClassName?: string;
  tagsContent?: string[];
  tagsClassName?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const BasicSectionHeader: React.FC<IBasicSectionHeaderProps> = ({
  hero = false,
  titleContent,
  titleClassName,
  headingContent,
  headingClassName,
  subheadingContent,
  subheadingClassName,
  tagsContent,
  tagsClassName,
  alignment = 'center',
}) => {
  const textAlignment =
    alignment === 'left'
      ? '!text-left'
      : alignment === 'right'
      ? '!text-right'
      : '!text-center';
  return (
    <div className={cn('mt-2 mb-4')}>
      <HeaderTitle
        text={titleContent}
        className={cn(textAlignment, titleClassName)}
      />
      <HeaderHeading
        text={headingContent}
        className={cn(textAlignment, headingClassName)}
      />
      <HeaderSubheading
        text={subheadingContent}
        className={cn(textAlignment, subheadingClassName)}
      />

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
};

export default BasicSectionHeader;
