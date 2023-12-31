import wildIcon from '../assets/icons/wildOasis.svg';
import pizzaIcon from '../assets/icons/pizza.svg';
import worldIcon from '../assets/icons/worldwise.svg';
import portIcon from '../assets/icons/port.svg';
import movieIcon from '../assets/icons/movie.svg';

const projectData = [
  {
    title: 'The Wild Oasis',
    desc: 'Curate your escape with our cabin booking app, in a seamless online getaway experience.',
    imgURL: wildIcon,
    titleLink: 'https://the-wild-oasis-ten-eta.vercel.app/',
    learnMore: 'https://github.com/khalid-09/The-Wild-Oasis',
    skills: [
      {
        skillName: 'React',
        skillURL: 'https://react.dev/',
      },
      {
        skillName: 'React Query',
        skillURL: 'https://tanstack.com/query/v3/',
      },
      {
        skillName: 'React Router',
        skillURL: 'https://reactrouter.com/en/main',
      },
      {
        skillName: 'Form Hook',
        skillURL: 'https://www.react-hook-form.com/',
      },
      {
        skillName: 'Styled Components',
        skillURL: 'https://styled-components.com/',
      },
    ],
  },
  {
    title: 'PizzaCo.',
    desc: 'A webapp where you can order pizza build using Redux Toolkit.',
    imgURL: pizzaIcon,
    titleLink: 'https://github.com/khalid-09/Fast-React-Pizza-Co.',
    learnMore: 'https://github.com/khalid-09/Fast-React-Pizza-Co.',
    skills: [
      {
        skillName: 'React',
        skillURL: 'https://react.dev/',
      },
      {
        skillName: 'React Router',
        skillURL: 'https://reactrouter.com/en/main',
      },
      {
        skillName: 'Redux',
        skillURL: 'https://redux.js.org/',
      },
      {
        skillName: 'Tailwind',
        skillURL: 'https://tailwindcss.com/',
      },
    ],
  },
  {
    title: 'WorldWise',
    desc: 'Track your global travels at a glance with our app, counting countries visited in a single tap.',
    imgURL: worldIcon,
    titleLink: 'https://github.com/khalid-09/WorldWise',
    learnMore: 'https://github.com/khalid-09/WorldWise',
    skills: [
      {
        skillName: 'React',
        skillURL: 'https://react.dev/',
      },
      {
        skillName: 'Tailwind',
        skillURL: 'https://tailwindcss.com/',
      },
      {
        skillName: 'React Router',
        skillURL: 'https://reactrouter.com/en/main',
      },
      {
        skillName: 'Redux',
        skillURL: 'https://redux.js.org/',
      },
    ],
  },
  {
    title: 'Developercraft',
    desc: 'Personal portfolio website to showcase my work and skills.',
    imgURL: portIcon,
    titleLink: '/',
    learnMore: 'https://github.com/khalid-09/DeveloperCraft',
    skills: [
      {
        skillName: 'React',
        skillURL: 'https://react.dev/',
      },
      {
        skillName: 'Tailwind',
        skillURL: 'https://tailwindcss.com/',
      },
      {
        skillName: 'React Router',
        skillURL: 'https://reactrouter.com/en/main',
      },
      {
        skillName: 'Hook Form',
        skillURL: 'https://www.react-hook-form.com/',
      },
    ],
  },
  {
    title: 'usePopcorn',
    desc: 'Discover, track all-in-one app for accessing movie details and keeping tabs on your watched list.',
    imgURL: movieIcon,
    titleLink: 'https://github.com/khalid-09/usePopcorn',
    learnMore: 'https://github.com/khalid-09/usePopcorn',
    skills: [
      {
        skillName: 'React',
        skillURL: 'https://react.dev/',
      },
      {
        skillName: 'Tailwind',
        skillURL: 'https://tailwindcss.com/',
      },
      {
        skillName: 'React Router',
        skillURL: 'https://reactrouter.com/en/main',
      },
      {
        skillName: 'Redux',
        skillURL: 'https://redux.js.org/',
      },
    ],
  },
];

export default projectData;
