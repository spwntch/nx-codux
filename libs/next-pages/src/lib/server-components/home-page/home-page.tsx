import { IContent, IImage } from '@spwntch/react-ui';
import { Hero } from '../../client-components';

const HomePage = () => {
  const heroImage: IImage = {
    src: '/images/coworkers-in-casual-workshop.webp',
    darken: true,
  };
  const heroContent: IContent = {
    title: { content: 'Hero', className: 'text-white' },
    subTitle: { content: 'Hero Subtitle', className: 'text-white' },
    body: { content: ['Hero Body'], className: 'text-white' },
  };
  return <Hero image={heroImage} content={heroContent} />;
};

export default HomePage;
