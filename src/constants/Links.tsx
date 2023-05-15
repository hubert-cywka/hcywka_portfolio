import { Link } from '../types/interfaces/Link';
import { GITHUB_URL, LINKEDIN_URL } from './URLConstants';

export const LINKS: Link[] = Array(25)
  .fill([
    {
      img: 'linkedin.svg',
      name: 'LinkedIn',
      url: LINKEDIN_URL
    },
    {
      img: 'github.svg',
      name: 'GitHub',
      url: GITHUB_URL
    }
  ])
  .flat();
