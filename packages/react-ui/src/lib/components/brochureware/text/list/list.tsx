import { Dot } from 'lucide-react';
import { IBullet } from '../../../../types';
import { cn } from '../../../../utils';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../shadcn-ui/avatar/avatar';

export interface IBulletsProps {
  content: IBullet[];
  className?: string;
  numbered?: boolean;
}

export const List: React.FC<IBulletsProps> = ({
  content,
  className,
  numbered,
}) => (
  <ul className={cn('flex flex-col gap-1 text-left', className)}>
    {content.map((bullet, index) => (
      <li key={index} className={cn('flex gap-3 items-center !mb-2', bullet.className)}>
        {bullet.icon && <div className="flex-shrink-0">{bullet.icon}</div>}
        {bullet.image && (
          <div className="flex-shrink-0">
            <Avatar className="h-6 w-6 text-xs">
              <AvatarImage src={bullet.image.src} alt={bullet.image.alt} />
              <AvatarFallback>{bullet.image.fallback}</AvatarFallback>
            </Avatar>
          </div>
        )}
        {bullet.emoji && (
          <div
            className={cn('flex-shrink-0', {
              'text-3xl': bullet.heading,
            })}
          >
            <span>{bullet.emoji}</span>
          </div>
        )}
        {!bullet.icon && !bullet.image && !bullet.emoji && numbered && (
          <div className="flex-shrink-0">
            <span>{index + 1}.</span>
          </div>
        )}
        {!bullet.icon && !bullet.image && !bullet.emoji && !numbered && <Dot />}
        <div className="">
          {bullet.heading && <div className="font-bold">{bullet.heading}</div>}
          <div className='text-sm md:text-base'>{bullet.body}</div>
        </div>
      </li>
    ))}
  </ul>
);

export default List;
