import {
  cn,
  ContentContainer,
  IContent,
  SimpleStats,
  YoutubePlayer,
} from '@spwntch/react-ui';

type Props = {
  id: string;
  youtubeId: string;
  content: IContent;
  stats: { label: string; value: string }[];
  className?: string;
};

export const AboutUs = ({ id, youtubeId, content, stats, className }: Props) => {
  return (
    <div id={id} className={cn("pt-12 pb-28",className)}>
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
