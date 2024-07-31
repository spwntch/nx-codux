import { CheckIcon } from 'lucide-react';
import { IContent } from '../../../../types';
import { Button } from '../../../shadcn-ui';
import { ContentContainer } from '../../containers';

type Props = {
  valueContent: IContent[];
  onCtaClick: () => void;
};

export const SimplePricing = ({ valueContent, onCtaClick }: Props) => {
  return (
    <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
      <div>
        {valueContent?.map((proposition, index) => (
          <div className="p-8 sm:p-10 lg:flex-auto">
            <ContentContainer innerContent={proposition} hAlign='left'/>
          </div>
        ))}
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            A ton of knowledge
          </h3>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Full access to everything we've learned about leveraging customers
            for maximum profitability and retention over 20 years of consulting
            to leading brands across a multitude of industries.
          </p>
          <div className=" flex items-center gap-x-4">
            <div className="h-px flex-auto bg-popover" />
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6">
            {valueContent?.[0].bullets?.map((bullet, index) => (
              <li key={index} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-primary"
                />
        {bullet.body}
        </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="h-full rounded-2xl bg-card py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-muted-foreground">
              Pay once, own it forever
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-foreground">
                $4,999
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                USD
              </span>
            </p>
            <Button className="mt-10" onClick={onCtaClick}>
              UNLOCK ACCESS TODAY
            </Button>
            <p className="mt-6 text-xs leading-5 text-muted-foreground">
              We're used to working with procurement departments. We'll help you
              deal with that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
