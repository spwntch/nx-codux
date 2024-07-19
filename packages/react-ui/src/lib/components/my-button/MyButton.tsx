import { ComponentProps } from 'react';

type MyButtonProps = ComponentProps<'button'>;

const MyButton = (props: MyButtonProps) => {
  return <button className="px-4 py-2 font-semibold bg-primary border-2 rounded" {...props} />;
};

export default MyButton;
