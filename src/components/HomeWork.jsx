import projectIcon from '../assets/icons/projects.svg';
import workAllIcon from '../assets/icons/allWork.svg';
import WorkCard from './WorkCard';
import projectData from '../constants/HomeWorkProject';
import Button from './Button';

const HomeWork = ({ homeWork = false, work }) => {
  const workArray = projectData.slice(0, 2);

  const render = (project) => <WorkCard work={work} {...project} key={project.title} />;

  return (
    <>
      {!work && (
        <p className="ml-5 mt-16 font-poppins font-bold text-mainBg transition duration-300 ease-in dark:text-white">
          Work
        </p>
      )}
      <div className={`mb-4 mt-2 w-full rounded-2xl  bg-mainBg px-4 py-4 dark:bg-lightBg ${work ? 'pb-10' : ''}`}>
        {!work ? (
          <div className="ml-2 flex items-center justify-start gap-3">
            <img src={projectIcon} alt="project-icon" height={20} width={20} />
            <p className="text-sm  font-semibold uppercase tracking-wide text-[#57534e]">Projects</p>
          </div>
        ) : (
          <div className="ml-2 mt-2 flex w-28  items-center justify-start gap-3 rounded-full border px-4 py-1">
            <img src={workAllIcon} alt="project-icon" height={20} width={20} />
            <p className="font-railway ">All</p>
            <span className="text-lg text-stone-400">{projectData.length}</span>
          </div>
        )}
        {homeWork ? workArray.map(render) : projectData.map(render)}
        {!work && (
          <div className="mt-3 flex justify-end">
            <Button text="view all" linkTo="/work" />
          </div>
        )}
      </div>
    </>
  );
};

export default HomeWork;
