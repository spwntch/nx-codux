import {
  ContentContainer,
  IContent,
  SimpleStats,
  YoutubePlayer,
} from '@spwntch/react-ui';

type Props = {
  youtubeId: string;
  content: IContent;
  stats: { label: string; value: string }[];
};

export const AboutUs = ({ youtubeId, content, stats }: Props) => {
  return (
    <div className="pt-12 pb-28 bg-muted">
      <div className="container">
        <div className="mx-auto grid  max-w-2xl grid-cols-1 gap-y-8 lg:gap-y-0  lg:max-w-none lg:grid-cols-2  lg:mx-0 lg:gap-x-8 ">
          <div className="pt-16">
            <YoutubePlayer
              id={youtubeId}
              thumbnailUrl="/images/youtube-placeholder-image.webp"
            />
          </div>
          <ContentContainer innerContent={content} hAlign="left" />
        </div>
        <SimpleStats stats={stats} />
      </div>
    </div>
  );
};

export default AboutUs;
