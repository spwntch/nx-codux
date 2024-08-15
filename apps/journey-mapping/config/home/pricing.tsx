import { IContent, IPricing } from "@spwntch/react-ui";

export const PRICING: IContent = {
  heading: "Obligation Free Quote",
  subheading: "Simple Pricing for Comprehensive Customer Journey Mapping.",
};

import { CheckIcon } from "lucide-react";

const icon = (
  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-primary" />
);

export const COST: IPricing = {
  heading: "Contact us now for an obligation-free quote",
  cta: { label: `CONTACT SALES` },
  note: `Provide us with a few details and one of our professional consultants will reach out to discuss your specific needs.`,
};

export const VALUE: IContent[] = [
  {
    heading: {
      content: "Expertise You Can Trust",
      // className: "md:text-2xl font-bold tracking-tight mb-0",
    },
    body: {
      content: [
        "Leverage over 20 years of experience in customer journey optimization, guiding top brands across various industries to success.",
      ],
      // className: "text-sm leading-6 text-muted-foreground mt-2",
    },
    bullets: {
      content: [
        { icon, body: ["Proven strategies and methodologies"] },
        { icon, body: ["Customizable templates and frameworks"] },
        { icon, body: ["In-depth analysis tools"] },
        { icon, body: ["Comprehensive support materials"] },
      ],
      className: "grid sm:grid-cols-2 text-muted-foreground mb-0",
    },
  },
  {
    heading: {
      content: "Tailored Learning Experience",
      // className: "md:text-2xl font-bold tracking-tight mb-0",
    },
    body: {
      content: [
        "We are committed to ensuring that your journey mapping experience is thorough, insightful, and transformative.",
      ],
      // className: "text-sm leading-6 text-muted-foreground mt-2",
    },
    bullets: {
      content: [
        { icon, body: ["Personalized account management"] },
        { icon, body: ["Access to industry experts"] },
        { icon, body: ["Facilitated sessions and workshops"] },
        { icon, body: ["Ongoing support and guidance"] },
      ],
      className: "grid sm:grid-cols-2 text-muted-foreground mb-0",
      // className: "grid lg:grid-cols-2 w-full text-sm text-muted-foreground mb-0",
    },
  },
  {
    heading: {
      content: "Continuous Support and Resources",
      // className: "md:text-2xl font-bold tracking-tight mb-0",
    },
    body: {
      content: [
        "Join our growing community of professionals dedicated to excellence in customer experience and journey mapping.",
      ],
      // className: "text-sm leading-6 text-muted-foreground mt-2",
    },
    bullets: {
      content: [
        { icon, body: ["Lifetime access to tools and resources"] },
        { icon, body: ["Exclusive community access"] },
        { icon, body: ["Opportunities for networking and collaboration"] },
      ],
      className: "grid sm:grid-cols-2 text-muted-foreground mb-0",
    },
  },
];