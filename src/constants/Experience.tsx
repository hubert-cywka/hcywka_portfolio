import { Experience } from '../types/interfaces/Experience';

export const IDEMIA_EXPERIENCE: Experience = {
  companyName: 'IDEMIA Poland R&D Sp. z o.o.',
  position: 'Intern Frontend Developer',
  to: '06.2023',
  since: '10.2022',
  responsibilities: [
    'Developed the MVP of a web application for a company recently ranked #1 by NIST.',
    'Integrated new interfaces with backend api, eg. a user system including best authorization practices.',
    'Developed over 50% of all functionalities on the frontend side.',
    'Prototyped design and provided the best possible UX and UI in cooperation with customers.',
    'Created a significant portion of unit tests, conducted UATs, reduced the time needed to run tests by 40%.',
    'Reviewed the code of coworkers and discussed necessary solutions.',
    'Participated in the implementation of CI/CD using Microsoft Azure and GitHub Actions.',
    'Optimized work using Git, GitHub, and Trello, utilized Agile methods to improve efficiency.',
    'Gathered and defined customer requirements and presented work results during weekly demos.',
    'Designed openAPI and prepared documentation, flow diagrams, use cases and release notes.'
  ],
  description:
    'It was a great opportunity to learn good practices in a controlled environment and learn about the process of creating applications, including collecting customer requirements, presentations of progress, or the process of releasing applications to the cloud. We worked from scratch on a web application project with a team of 9. '
};

export const LODZ_EXPERIENCE: Experience = {
  companyName: 'Politechnika Łódzka',
  position: 'Bachelor Degree of IT',
  to: 'Present',
  since: '10.2021',
  description:
    'I am a second-year IT student at Politechnika Łódzka. Currently, I am immersing myself in the world of Information Technology, learning programming, network administration, and system analysis.'
};

export const GRAPHIC_EXPERIENCE: Experience = {
  companyName: 'Freelancing',
  position: 'Graphic Designer',
  to: '03.2021',
  since: '07.2018',
  responsibilities: [
    "Gathering and defining clients' requirements.",
    'Providing help with printing my projects.',
    'Designing raster and vector graphics.',
    'Preparing files for print.'
  ],
  description:
    'I have worked on a diverse range of projects, including logo designs, phone cases, duvet sets, banners, and more. Collaborated with individual clients in Poland, Netherlands and international companies.'
};

export const EXPERIENCE: Experience[] = [IDEMIA_EXPERIENCE, LODZ_EXPERIENCE, GRAPHIC_EXPERIENCE];
