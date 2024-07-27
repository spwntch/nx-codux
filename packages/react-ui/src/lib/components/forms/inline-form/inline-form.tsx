import { cn } from '../../../utils';
import { Button, Input } from '../../shadcn-ui';

interface InlineFormProps {
  className?: string;
}
const InlineForm = ({ className }: InlineFormProps) => {
  return (
    <div className={cn('flex space-between gap-16', className)}>
      <Input placeholder="First name" />
      <Input placeholder="Business email address" />
      <Button>GET PLAYBOOK OUTLINE</Button>
    </div>
  );
};

export default InlineForm;
