import { BulletsWithClassName, IBullet } from '../../../../types';
import { cn, getBulletsContentAndClassName } from '../../../../utils';

interface IAlternatingSplitBenefitsProps {
  benefits: IBullet[] | BulletsWithClassName;
}

const AlternatingSplitBenefits = ({
  benefits,
}: IAlternatingSplitBenefitsProps) => {
  const { bulletsContent } = getBulletsContentAndClassName(benefits);

  return (
    <div className=" space-y-16 ">
      {bulletsContent.map((benefit, benefitIdx) => (
        <div
          key={benefit.heading}
          className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
        >
          <div
            className={cn(
              benefitIdx % 2 === 0
                ? 'lg:col-start-1'
                : 'lg:col-start-8 xl:col-start-9',
              'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
            )}
          >
            <h3 className="text-lg font-medium text-foreground">
              {benefit.heading}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{benefit.body}</p>
          </div>
          <div
            className={cn(
              benefitIdx % 2 === 0
                ? 'lg:col-start-6 xl:col-start-5'
                : 'lg:col-start-1',
              'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
            )}
          >
            <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg ">
              <img
                alt={benefit.image?.alt || benefit.heading}
                src={benefit.image?.src}
                className="object-cover object-center brightness-50"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingSplitBenefits;
