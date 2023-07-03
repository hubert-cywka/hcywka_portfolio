import { Contact } from './Contact';

export interface Developer {
  name: string;
  role: string;
  about: string;
  picture: string;
  contacts: Contact[];
}
