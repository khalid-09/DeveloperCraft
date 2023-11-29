import { Link } from 'react-router-dom';
import webLink from '../assets/icons/website-link.svg';

const WorkCard = ({ title, desc, skills, imgURL, titlelink }) => {
  return (
    <div>
      <div className="mt-4 flex gap-4 p-2">
        <div className="h-24 w-32 rounded-3xl border">
          <img src={imgURL} alt="project-link" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <h4 className="font-railway text-xl transition hover:underline ">
            <a href={titlelink} className="flex gap-1">
              {title}
              <img src={webLink} height={15} width={15} alt="web-link-icon" />
            </a>
          </h4>
          <p className="font-poppins text-sm md:text-base">
            {desc}{' '}
            <Link to="/work" className="font-poppins italic text-white opacity-50 hover:underline">
              Learn More &rarr;
            </Link>
          </p>
        </div>
      </div>
      <ul className="flex gap-2 border-b-2 border-[#57534e] p-2 font-poppins ">
        {skills.map((skill) => (
          <li
            className="rounded-full bg-lightBg px-2 py-1  text-xs text-white hover:scale-105 dark:bg-mainBg md:px-2"
            key={skill.skillName}
          >
            <a href={skill.skillURL} target="_">
              {skill.skillName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
