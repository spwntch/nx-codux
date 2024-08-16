import {
  cn,
  ContentContainer,
  IContent,
  SimpleStats,
  YoutubePlayer,
} from '@spwntch/react-ui';

type AboutProps = {
  id: string;
  youtubeId: string;
  content: IContent;
  stats: { label: string; value: string }[];
  className?: string;
};

export const About = ({ id, youtubeId, content, stats, className }: AboutProps) => {
  return (
    <div id={id} className={cn("pt-12 pb-28",className)}>
      <div className="container">
        <div className="mx-auto grid  max-w-2xl grid-cols-1 gap-y-8 lg:gap-y-0  lg:max-w-none lg:grid-cols-2  lg:mx-0 lg:gap-x-8 ">
          <div className="pt-16 pb-8">
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

export default About;
