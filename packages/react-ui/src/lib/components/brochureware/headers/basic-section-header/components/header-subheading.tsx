import { cn } from '../../../../../utils';

type Props = {
  text?: string;
  className: string;
};

const HeaderSubheading = ({ text, className }: Props) => {
  if (!text) return null;
  return (
    <h3 className={cn('text-lg md:text-xl font-semibold mb-2 mt-6', className)}>{text}</h3>
  );
};

export default HeaderSubheading;
