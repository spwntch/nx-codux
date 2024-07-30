import React from 'react';

type Props = {
  stats: { label: string; value: string }[];
};

const AboutStats = ({ stats }: Props) => {
  return (
    <dl className="mx-2 md:mx-8 my-8  grid grid-cols-2 gap-2 md:gap-4 overflow-hidden rounded-2xl text-center  lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col bg-card p-6">
          <dt className=" font-semibold leading-6 text-card-foreground">
            {stat.label}
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default AboutStats;
