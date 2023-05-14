import { Link } from '../types/interfaces/Link';

export const LINKS: Link[] = Array(25)
  .fill([
    {
      img: 'linkedin.svg',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hubert-cywka'
    },
    {
      img: 'github.svg',
      name: 'GitHub',
      url: 'https://www.github.com/hejs22'
    }
  ])
  .flat();
