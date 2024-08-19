import { Contact } from '@/crm';

const parseContact = (contact: Contact) => {
  const { id, firstName, lastName, email } = contact;
  return {
    id,
    contact_name: `${firstName} ${lastName}`,
    email,
  };
};

export const logGoogeAdsEvent = (event: string, contact: Contact) => {
  switch (event) {
    case 'product_purchase_request':
      return logProductRequestEvent(contact);
    default:
      console.log(`Event ${event} not supported`);
      return;
  }
};

export const logProductRequestEvent = (contact: Contact) =>
  window.gtag('event', 'product_purchase_request', {
    ...parseContact(contact),
  });

export const logResourceDownloadRequestEvent = (
  path: string,
  slug: string,
  contact: Contact
) => {
  window.gtag('event', 'download_request', { slug, ...parseContact(contact) });
  // logMagnetDownloadRequestConversion();
};

export const logResourceDownloadEmailSentEvent = (
  path: string,
  slug: string,
  contact: Contact,
  emailId: string
) =>
  window.gtag('event', 'download_email_sent', {
    slug,
    emailId,
    ...parseContact(contact),
  });

export const logResourceDownloadEvent = (
  path: string,
  slug: string,
  contact: Contact
) =>
  window.gtag('event', 'download_completed', {
    slug,
    ...parseContact(contact),
  });
