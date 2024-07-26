'use client';

import { ContentContainer, IContent } from '@spwntch/react-ui';

export interface BenefitsProps {
  content: IContent;
}

const Benefits = ({ content }: BenefitsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return <div className="flex-col pt-16">
    <ContentContainer innerContent={header}  />
    {/* {content.bullets && <FeatureGrid features={content.bullets} />} */}
  </div>;
  // return (
  //   <>
  //     {benefits.map((benefit, index) => (
  //       <div className="mb-8">
  //         <SplitImageContentSection
  //           image={benefit.image}
  //           innerContent={benefit.content}
  //           flip={index % 2 === 0}
  //           height={360}
  //           hAlign="left"
  //           vAlign="top"
  //         />
  //       </div>
  //     ))}
  //   </>
  // );
};

export default Benefits;
