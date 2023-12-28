import { Link } from 'react-router-dom';
import webLink from '../assets/icons/website-link.svg';

const WorkCard = ({ work = false, title, desc, skills, imgURL, titleLink, learnMore }) => {
  return (
    <div>
      <div className="mt-4 flex  gap-4 p-2 md:gap-6">
        <div className="flex w-24 items-center justify-center rounded-3xl ">
          <div className="flex items-center justify-center">
            <img src={imgURL} alt="project-link" height={70} width={70} />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <h4 className="flex gap-1 font-poppins text-xl  transition hover:underline">
            <a target="_blank" rel="noopener noreferrer" href={titleLink}>
              {title}
            </a>
            <img src={webLink} height={15} width={15} alt="web-link-icon" />
          </h4>
          <p className="flex flex-col gap-1 font-poppins text-sm text-stone-400 md:text-base">
            {desc}{' '}
            <Link to={work ? learnMore : '/work'} className="font-poppins italic text-white underline hover:underline">
              Learn More &rarr;
            </Link>
          </p>
        </div>
      </div>
      <ul className=" mt-1 flex flex-wrap gap-2 border-b-2 border-stone-700  p-2 pb-8 font-poppins">
        {skills.map((skill) => (
          <li
            className="rounded-full bg-stone-100 px-2 py-1 text-xs font-bold text-stone-900  hover:scale-105 dark:bg-mainBg dark:font-normal dark:text-white md:px-2 md:text-sm"
            key={skill.skillName}
          >
            <a href={skill.skillURL} target="_blank" rel="noreferrer noopener">
              {skill.skillName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
