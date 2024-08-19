export interface Contact {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  phone?: string;
  spwntch_contact_id?: string;
  fieldValues: { field: string; value: string }[];
}
