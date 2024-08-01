import { BulletsWithClassName, IBullet } from '../../../../types';
import { getBulletsContentAndClassName } from '../../../../utils';

interface IHeaderWithFeatureCardsProps {
  features: IBullet[] | BulletsWithClassName;
}

const FeatureGrid = ({ features }: IHeaderWithFeatureCardsProps) => {
  const { bulletsContent } = getBulletsContentAndClassName(features);
  return (
    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
      {bulletsContent.map((feature) => (
        <div key={feature.heading} className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-foreground">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              {feature.icon}
            </div>
            {feature.heading}
          </dt>
          <dd className="mt-2 text-base leading-7 text-muted-foreground">
            {feature.body}
          </dd>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
