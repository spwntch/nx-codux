import { cn } from '../../../../../utils';

type Props = {
  text?: string;
  className: string;
};

const HeaderTitle = ({ text, className }: Props) => {
  if (!text) return null;
  return (
    <h1 className={cn('text-5xl font-bold mb-2 mt-6', className)}>{text}</h1>
  );
};

export default HeaderTitle;
