import { ICtaButton } from '../ui/cta';

export interface IPricing {
  heading: string;
  price: string;
  currency: string;
  cta: ICtaButton;
  note: string;
}
