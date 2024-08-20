import { BulletsWithClassName, IBullet } from '../../../../types';
import { cn, getBulletsContentAndClassName } from '../../../../utils';

interface IHeaderWithFeatureCardsProps {
  features: IBullet[] | BulletsWithClassName;
  className?: string;
}

export const FeatureGridTwo = ({
  features,
  className,
}: IHeaderWithFeatureCardsProps) => {
  const { bulletsContent } = getBulletsContentAndClassName(features);
  return (
    <div
      className={cn(
        'grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16',
        className
      )}
    >
      {bulletsContent.map((feature) => (
        <div key={feature.heading} className="flex flex-col">
          <dt className="text-base font-semibold leading-7 text-white">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-background border border-foreground">
              {feature.icon}
            </div>
            {feature.heading}
          </dt>
          <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
            <p className="flex-auto">{feature.body}</p>
          </dd>
        </div>
      ))}
    </div>
  );
};
