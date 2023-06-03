import { Experience } from '../types/interfaces/Experience';

export const IDEMIA_EXPERIENCE: Experience = {
  companyName: 'IDEMIA Poland R&D Sp. z o.o.',
  position: 'Intern Frontend Developer',
  to: 'Present',
  since: '10.2022',
  responsibilities: [
    'Creating web application using React, HTML, SCSS, TypeScript.',
    'Implementing several libraries, eg. React Query, React Hook Form.',
    'Writing unit tests with usage of Jest.',
    'Creating and conducting UATs.',
    'Reviewing code of coworkers.',
    'Organizing work using Git, GitHub and Trello.',
    'Gathering and defining customer requirements.',
    'Presenting results of work during weekly demos.',
    'Participating in designing openAPI.',
    'Using Agile methods.'
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
