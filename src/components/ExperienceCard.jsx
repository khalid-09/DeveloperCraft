import experience from '../constants/experience';
import projectIcon from '../assets/icons/projects.svg';

const ExperienceCard = () => {
  return (
    <div className=" w-full rounded-2xl border border-stone-700 border-opacity-30 bg-mainBg p-4 dark:bg-lightBg md:w-4/6">
      <div className="ml-3 flex items-center justify-start gap-3">
        <img src={projectIcon} alt="project-icon" height={20} width={20} />
        <p className="text-sm  font-semibold uppercase tracking-wide text-[#57534e]">Skills</p>
      </div>
      <div>
        <ul className=" mt-3 flex flex-wrap gap-2 p-2 font-poppins  md:gap-1">
          {experience.map((skill) => (
            <li
              className="rounded-full border border-stone-700 border-opacity-60 bg-stone-100 px-2 py-1  text-xs font-semibold text-stone-900 hover:scale-105 dark:bg-stone-700 dark:font-normal dark:text-stone-200 md:px-2 md:text-sm"
              key={skill.skillName}
            >
              <a href={skill.skillLink} target="_">
                {skill.skillName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
