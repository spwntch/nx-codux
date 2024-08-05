import { forwardRef } from 'react';
import { Button, ButtonProps } from '../../shadcn-ui';
import { cn } from '../../../utils';
import { PulseLoader } from 'react-spinners';

export interface SubmitButtonProps extends ButtonProps {
  processing?: boolean;
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ processing, className, ...props }, ref) => {
    return (
      <Button
        type="submit"
        disabled={props.disabled || processing}
        className={cn(
          processing && 'disabled:cursor-not-allowed animate-pulse',
          className
        )}
        ref={ref}
        {...props}
      >
        {processing ? <PulseLoader color='#ffffff' /> : props.children || 'SUBMIT'}
      </Button>
    );
  }
);

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
