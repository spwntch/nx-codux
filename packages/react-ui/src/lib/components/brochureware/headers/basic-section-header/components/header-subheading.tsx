import { cn } from '../../../../../utils';

type Props = {
  text?: string;
  className: string;
};

const HeaderSubheading = ({ text, className }: Props) => {
  if (!text) return null;
  return (
    <h3 className={cn('text-lg md:text-2xl  font-semibold mb-4 mt-3', className)}>{text}</h3>
  );
};

export default HeaderSubheading;
