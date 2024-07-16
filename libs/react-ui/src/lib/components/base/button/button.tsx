import { PropsWithChildren } from 'react';

const Button = ({ children }: PropsWithChildren) => {
  return <div className='px-4 py-2 bg-blue-500 text-white rounded-lg w-fit'>{children}</div>;
};

export default Button;
