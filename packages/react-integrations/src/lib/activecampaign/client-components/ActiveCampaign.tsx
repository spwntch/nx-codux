'use client';

import Script from 'next/script';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vgo: any;
  }
}

export const ActiveCampaign = () => {
  if (!process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_ACCOUNT_ID) return null;
  return (
    <Script>
      {`(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
    vgo('setAccount', '${process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_ACCOUNT_ID}');
    vgo('setTrackByDefault', true);
    vgo('process');`}
    </Script>
  );
};

export default ActiveCampaign;
