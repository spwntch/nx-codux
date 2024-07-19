'use client';
import { Button } from '@/ui';

const Widget = () => {
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-5xl text-primary">Hello world...</h1>
      <Button variant="ghost">Click me</Button>
    </div>
  );
};

export default Widget;
