import { IMdxDocMeta } from '../../../types';
import { cn } from '../../../utils';
import { Tags } from '../../components';
import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../shadcn-ui';

interface IPostCardProps extends IMdxDocMeta {
  onClick: (slug: string) => void;
  className?: string; // Add className prop
}

export const ArticleCard = ({
  slug,
  coverImage,
  authorAvatar,
  date,
  title,
  subtitle,
  tags,
  onClick,
  className, // Destructure className prop
}: IPostCardProps) => {
  return (
    <Card
      className={cn('max-w-2xl mx-auto cursor-pointer rounded', className)} // Use className prop
      onClick={() => onClick(slug)}
    >
      <CardContent className={cn('m-0 p-0')}>
        <img
          className={cn('object-cover object-center rounded-t w-full h-60')}
          alt="article coverimage"
          src={coverImage}
        />
      </CardContent>
      <CardHeader>
        {tags?.length && (
          <Tags tags={tags} className="hidden md:flex gap-3 mb-3" />
        )}
        <div className="flex gap-3 items-center">
          {authorAvatar && (
            <div>
              <Avatar>
                <AvatarImage src={authorAvatar}></AvatarImage>
              </Avatar>
            </div>
          )}
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="mt-2 text-xs">{date}</p>
          </div>
        </div>
        <CardDescription className={cn('!mt-3')}>{subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
