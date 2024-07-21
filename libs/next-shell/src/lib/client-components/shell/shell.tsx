'use client';

import { SiteShell, SiteShellProps } from '@spwntch/react-ui';

import { PropsWithChildren } from 'react';

export const Shell = (props: SiteShellProps & PropsWithChildren) => {
  return <SiteShell {...props} />;
};
