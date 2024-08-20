import { IContent } from '@spwntch/react-ui';

export const FINAL_CTA: IContent = {
  heading: {
    content: 'Ready to Transform Your Customer Strategy?',
  },
  subheading: {
    content: 'Unlock the Power of the ICP Playbook Today!',
  },
  body: {
    content: [
      'Join the ranks of other successful businesses that have revolutionized their marketing and product strategies with the ICP Playbook.',
      'Identify your high-potential customers, boost your conversion rates, and achieve seamless team alignment. Our comprehensive toolkit, including workshops, templates, and data-driven insights, is designed to ensure your success.',
      'Don’t miss out on the opportunity to elevate your business. Complete this form and get started on your journey to unparalleled growth and efficiency!',
    ],
    className: 'text-lg text-left max-w-4xl',
  },
  ctas: [
    {
      label: `LET'S CHAT`,
      triggerEvents: {
        crm: 'start-automation_icp-playbook-get-started-form',
        ga: 'product_purchase_request',
      },
    },
  ],
};
