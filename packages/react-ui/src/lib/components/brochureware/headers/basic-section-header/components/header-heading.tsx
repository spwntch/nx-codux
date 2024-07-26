import { cn } from '../../../../../utils';

type Props = {
  text?: string;
  className: string;
};

const HeaderHeading = ({ text, className }: Props) => {
  if (!text) return null;
  return (
    <h2 className={cn('text-3xl font-bold mb-2 mt-6', className)}>{text}</h2>
  );
};

export default HeaderHeading;
