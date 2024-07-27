import { IContent, TextWithClassName } from '../../../..//types';
import { Button } from '../../../shadcn-ui';
import { ContentContainer } from '../../containers';

export interface ISimpleJustifiedBannerProps {
  innerContent: IContent;
}

export const SimpleJustifiedBanner = ({
  innerContent,
}: ISimpleJustifiedBannerProps) => {
  const message: IContent = {
    heading: {
      content:
        (innerContent.heading as TextWithClassName).content ||
        (innerContent.heading as string),
      // className:
      //   'text-3xl font-bold tracking-tight text-foreground sm:text-4xl !text-left',
    },
    subheading: {
      content:
        (innerContent.subheading as TextWithClassName).content ||
        (innerContent.subheading as string),
      // className:
      //   'text-3xl font-bold tracking-tight text-foreground sm:text-4xl !text-left',
    },
  };
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
      <ContentContainer innerContent={message} hAlign="left" />
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
        <Button>GET STARTED</Button>
      </div>
    </div>
  );
};
