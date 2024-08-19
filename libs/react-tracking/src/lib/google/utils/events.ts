import { Contact } from '@/crm';

const parseContact = (contact: Contact) => {
  const { id, firstName, lastName, email } = contact;
  return {
    id,
    contact_name: `${firstName} ${lastName}`,
    email,
  };
};

export const logGA4Event = (
  event: string,
  contact: Contact,
  data?: { path?: string; slug?: string; emailId?: string }
) => {
  switch (event) {
    case 'product_purchase_request':
      return window.gtag('event', event, { ...parseContact(contact) });
    case 'download_request':
    case 'download_completed':
      return window.gtag('event', event, {
        slug: data?.slug,
        ...parseContact(contact),
      });
    case 'download_email_sent':
      return window.gtag('event', event, {
        slug: data?.slug,
        emailId: data?.emailId,
        ...parseContact(contact),
      });
    default:
      console.log(`Event ${event} not supported`);
      return;
  }
};
