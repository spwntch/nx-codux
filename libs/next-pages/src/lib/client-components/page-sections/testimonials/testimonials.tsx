'use client';

import { ContentContainer, IContent } from '@spwntch/react-ui';

export interface TestimonialsProps {
  content: IContent;
}

const Testimonials = ({ content }: TestimonialsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return <div className="flex-col pt-16">
    <ContentContainer innerContent={header}  />
    {/* {content.bullets && <AlternatingSplitBenefits benefits={content.bullets} />} */}
  </div>;
};

export default Testimonials;
