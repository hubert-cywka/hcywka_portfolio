import { Link } from '../types/interfaces/Link';
import { GITHUB_URL, LINKEDIN_URL } from './URLConstants';
import { GITHUB_IMAGE, LINKEDIN_IMAGE } from './ImageConstants';

export const LINKS: Link[] = Array(25)
  .fill([
    {
      img: LINKEDIN_IMAGE,
      name: 'LinkedIn',
      url: LINKEDIN_URL
    },
    {
      img: GITHUB_IMAGE,
      name: 'GitHub',
      url: GITHUB_URL
    }
  ])
  .flat();
