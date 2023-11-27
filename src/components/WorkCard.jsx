import { Link } from 'react-router-dom';
import webLink from '../assets/icons/website-link.svg';

const WorkCard = ({ title, desc, skills, imgURL, titlelink }) => {
  return (
    <div>
      <div className="p-2 mt-4 flex gap-4">
        <div className="border h-24 w-32 rounded-3xl">
          <img src={imgURL} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h4 className="text-xl font-poppins hover:underline transition ">
            <a href={titlelink} className="flex gap-1">
              {title}
              <img src={webLink} alt="hamburger" className="hover:underline" />
            </a>
          </h4>
          <p className="font-libre">
            {desc}{' '}
            <Link
              to="/work"
              className="font-poppins hover:underline italic opacity-50 text-white"
            >
              Learn More &rarr;
            </Link>
          </p>
        </div>
      </div>
      <ul className="p-2 flex gap-2 border-b-2 border-[#57534e] font-poppins ">
        {skills.map(skill => (
          <li
            className="bg-lightBg dark:bg-mainBg text-white px-2  md:px-2 rounded-full py-1 text-sm hover:scale-105"
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
