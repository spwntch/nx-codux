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
        {valueContent?.map((proposition, index) => {
          // const header={heading}
          return (
            <div className="p-8 sm:p-10 lg:flex-auto">
              <ContentContainer
                innerContent={proposition}
                hAlign="left"
                className="lg:p-0"
              />
            </div>
          );
        })}
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
