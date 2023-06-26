import { Contact } from '../types/interfaces/Contact';
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from './URLConstants';
import { EMAIL_IMAGE, GITHUB_IMAGE, LINKEDIN_IMAGE } from './ImageConstants';

export const CONTACTS: Contact[] = [
  { name: 'LinkedIn', img: LINKEDIN_IMAGE, href: LINKEDIN_URL },
  { name: 'GitHub', img: GITHUB_IMAGE, href: GITHUB_URL },
  { name: 'Email', img: EMAIL_IMAGE, href: `mailto:${EMAIL_URL}` }
];
