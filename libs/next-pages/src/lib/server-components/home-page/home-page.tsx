import { IContent, IImage } from '@spwntch/react-ui';
import { Hero } from '../../client-components';

const HomePage = () => {
  const heroImage: IImage = {
    src: '/images/coworkers-in-casual-workshop.webp',
    darken: true,
  };
  const heroContent: IContent = {
    title: 'Hero',
    subTitle: 'Hero Subtitle',
    body: ['Hero Body'],
  };
  return <Hero image={heroImage} content={heroContent} />;
};

export default HomePage;
