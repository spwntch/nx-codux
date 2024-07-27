import { useMediaQuery } from '@react-hooks-library/core';
import { cn } from '../../../utils';
import { Button, Input } from '../../shadcn-ui';

interface InlineFormProps {
  className?: string;
}
const InlineForm = ({ className }: InlineFormProps) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div
      className={cn(
        'flex space-between gap-x-16 gap-y-8',
        isMobile && 'flex-col',
        className
      )}
    >
      <Input placeholder="First name" />
      <Input placeholder="Business email address" />
      <Button>GET PLAYBOOK OUTLINE</Button>
    </div>
  );
};

export default InlineForm;
