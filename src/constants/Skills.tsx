import { Skill } from '../types/interfaces/Skill';
import {
  CSS_IMAGE,
  DOCKER_IMAGE,
  GIT_IMAGE,
  GITHUB_IMAGE,
  HTML_IMAGE,
  ILLUSTRATOR_IMAGE,
  JAVA_IMAGE,
  JEST_IMAGE,
  JS_IMAGE,
  MUI_IMAGE,
  PHOTOSHOP_IMAGE,
  REACT_IMAGE,
  REST_IMAGE,
  SPRING_IMAGE,
  TS_IMAGE
} from './ImageConstants';

export const SKILLS: Skill[] = [
  {
    img: REACT_IMAGE,
    name: 'React.js',
    level: 4
  },
  {
    img: JS_IMAGE,
    name: 'JavaScript',
    level: 3
  },
  {
    img: TS_IMAGE,
    name: 'TypeScript',
    level: 3
  },
  {
    img: HTML_IMAGE,
    name: 'HTML',
    level: 4
  },
  {
    img: CSS_IMAGE,
    name: 'CSS',
    level: 4
  },
  {
    img: GITHUB_IMAGE,
    name: 'GitHub',
    level: 4
  },
  {
    img: GIT_IMAGE,
    name: 'Git',
    level: 4
  },
  {
    img: DOCKER_IMAGE,
    name: 'Docker',
    level: 2
  },
  {
    img: MUI_IMAGE,
    name: 'Material UI',
    level: 4
  },
  {
    img: JEST_IMAGE,
    name: 'Jest',
    level: 4
  },
  {
    img: REST_IMAGE,
    name: 'REST API',
    level: 3
  },
  {
    img: JAVA_IMAGE,
    name: 'Java',
    level: 2
  },
  {
    img: SPRING_IMAGE,
    name: 'Spring Boot',
    level: 1
  },
  {
    img: PHOTOSHOP_IMAGE,
    name: 'Photoshop',
    level: 3
  },
  {
    img: ILLUSTRATOR_IMAGE,
    name: 'Illustrator',
    level: 4
  }
];
