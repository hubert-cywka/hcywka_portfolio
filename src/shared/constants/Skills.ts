import { Skill } from 'shared/types/Portfolio';
import {
  CSS_IMAGE,
  CYPRESS_IMAGE,
  DOCKER_IMAGE,
  EXPRESS_IMAGE,
  GIT_IMAGE,
  GITHUB_IMAGE,
  HTML_IMAGE,
  ILLUSTRATOR_IMAGE,
  JAVA_IMAGE,
  JEST_IMAGE,
  JS_IMAGE,
  MUI_IMAGE,
  NEXTJS_IMAGE,
  NODEJS_IMAGE,
  PHOTOSHOP_IMAGE,
  REACT_IMAGE,
  SPRING_IMAGE,
  TS_IMAGE
} from './ImageConstants';

export class Skills {
  static PROGRAMMING_SKILLS: Skill[] = [
    {
      img: REACT_IMAGE,
      name: 'React.js'
    },
    {
      img: NEXTJS_IMAGE,
      name: 'Next.js'
    },
    {
      img: JS_IMAGE,
      name: 'JavaScript'
    },
    {
      img: TS_IMAGE,
      name: 'TypeScript'
    },
    {
      img: HTML_IMAGE,
      name: 'HTML'
    },
    {
      img: CSS_IMAGE,
      name: 'CSS'
    },
    {
      img: MUI_IMAGE,
      name: 'Material UI'
    },
    {
      img: EXPRESS_IMAGE,
      name: 'Express'
    },
    {
      img: NODEJS_IMAGE,
      name: 'Node.js'
    },
    {
      img: JAVA_IMAGE,
      name: 'Java'
    },
    {
      img: SPRING_IMAGE,
      name: 'Spring Boot'
    }
  ];

  static TESTING_SKILLS: Skill[] = [
    {
      img: CYPRESS_IMAGE,
      name: 'Cypress'
    },
    {
      img: JEST_IMAGE,
      name: 'Jest'
    }
  ];

  static TOOLS_SKILLS: Skill[] = [
    {
      img: GITHUB_IMAGE,
      name: 'GitHub'
    },
    {
      img: GIT_IMAGE,
      name: 'Git'
    },
    {
      img: DOCKER_IMAGE,
      name: 'Docker'
    }
  ];

  static DESIGN_SKILLS: Skill[] = [
    {
      img: PHOTOSHOP_IMAGE,
      name: 'Photoshop'
    },
    {
      img: ILLUSTRATOR_IMAGE,
      name: 'Illustrator'
    }
  ];
}
