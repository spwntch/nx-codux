import { cn } from '../../../../../utils';

type Props = {
  text?: string;
  className: string;
};

const HeaderTitle = ({ text, className }: Props) => {
  if (!text) return null;
  return (
    <h1 className={cn('text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-5 mt-12 sm:mt-24 ', className)}>{text}</h1>
  );
};

export default HeaderTitle;
