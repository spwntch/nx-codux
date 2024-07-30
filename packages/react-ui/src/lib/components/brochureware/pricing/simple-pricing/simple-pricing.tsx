import { CheckIcon } from 'lucide-react';
import { Button } from '../../../shadcn-ui';

const includedFeatures0 = [
  'Background theory',
  'Methods that work',
  'Workshop materials',
  'Analysis templates',
];
const includedFeatures1 = [
  'Concierge account management',
  'Subject matter experts',
  'Facilitated workshops',
  '24/7 support',
];
const includedFeatures2 = [
  'Perpetual license to use our templates',
  'Continually growing Discord community',
  'Your next big opportunity, perhaps?',
];

type Props = {
  onCtaClick: () => void;
};

export const SimplePricing = ({ onCtaClick }: Props) => {
  return (
    <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
      <div>
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
            {includedFeatures0.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-primary"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            A guided learning journey
          </h3>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            We take customer experience serioulsy, and we hope this'll be the
            best learning journey you've ever had!
          </p>
          <div className="flex items-center gap-x-4">
            <div className="h-px flex-auto bg-popover" />
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6">
            {includedFeatures1.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-primary"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Free access, forever...
          </h3>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Join our ever-growing community of learners and experts in the
            field. Engage in conversation with leaders in your space.
          </p>
          <div className="flex items-center gap-x-4">
            <div className="h-px flex-auto bg-popover" />
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6">
            {includedFeatures2.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-primary"
                />
                {feature}
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
              We're used to working with procurement departments. We'll help you deal with that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
