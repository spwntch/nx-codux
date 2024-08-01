import {
  IContent,
  TextWithClassName,
  ParapgraphsWithClassName,
  BulletsWithClassName,
  IBullet,
} from '../types';

export const getTitleContentAndClassName = (title: IContent['title']) => {
  const titleContent =
    (title as TextWithClassName)?.content || (title as string);
  const titleClassName = (title as TextWithClassName)?.className || '';
  return { titleContent, titleClassName };
};
export const getHeadingContentAndClassName = (heading: IContent['heading']) => {
  const headingContent =
    (heading as TextWithClassName)?.content || (heading as string);
  const headingClassName = (heading as TextWithClassName)?.className || '';
  return { headingContent, headingClassName };
};

export const getSubheadingContentAndClassName = (
  subheading: IContent['subheading']
) => {
  const subheadingContent =
    (subheading as TextWithClassName)?.content || (subheading as string);
  const subheadingClassName =
    (subheading as TextWithClassName)?.className || '';
  return { subheadingContent, subheadingClassName };
};

export const getBodyContentAndClassName = (body: IContent['body']) => {
  const bodyContent =
    (body as ParapgraphsWithClassName)?.content || (body as string[]);
  const bodyClassName = (body as ParapgraphsWithClassName)?.className || '';
  return { bodyContent, bodyClassName };
};

export const getBulletsContentAndClassName = (bullets: IContent['bullets']) => {
  const bulletsContent =
    (bullets as BulletsWithClassName)?.content || (bullets as IBullet[]);
  const bulletsClassName = (bullets as BulletsWithClassName)?.className || '';
  return { bulletsContent, bulletsClassName };
};
export const getTagsContentAndClassName = (tags: IContent['tags']) => {
  const tagsContent =
    (tags as ParapgraphsWithClassName)?.content || (tags as string[]);
  const tagsClassName = (tags as ParapgraphsWithClassName)?.className || '';
  return { tagsContent, tagsClassName };
};
