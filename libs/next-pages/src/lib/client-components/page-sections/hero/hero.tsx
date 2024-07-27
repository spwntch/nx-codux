'use client';
import { IContent, IImage } from '@spwntch/react-ui';

export interface IHeroProps {
  image: IImage;
  content: IContent;
}

const Hero = ({ image, content }: IHeroProps) => {
  return null
  // return (
  //   <ImageContentSection
  //     image={image}
  //     innerContent={content}
  //     hero
  //     hAlign="left"
  //     vAlign="bottom"
  //     className="text-white max-w-2xl"
  //   />
  // );
};

export default Hero;
