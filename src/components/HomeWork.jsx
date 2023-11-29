import projectIcon from '../assets/icons/projects.svg';
import WorkCard from './WorkCard';
import projectData from '../constants/HomeWorkProject';
import Button from './Button';

const HomeWork = () => {
  return (
    <>
      <p className="ml-5 mt-16 font-poppins font-bold text-mainBg transition duration-300 ease-in dark:text-white">
        Work
      </p>
      <div className="mb-4 mt-2 w-full rounded-2xl bg-mainBg px-4 py-4 dark:bg-lightBg">
        <div className="ml-2 flex items-center justify-start gap-3">
          <img src={projectIcon} alt="project-icon" height={20} width={20} />
          <p className="text-sm  font-semibold uppercase tracking-wide text-[#57534e]">Projects</p>
        </div>
        {projectData.map((project) => (
          <WorkCard
            title={project.title}
            desc={project.desc}
            skills={project.skills}
            imgURL={project.imgURL}
            titlelink={project.titlelink}
            key={project.title}
          />
        ))}
        <div className="mt-3 flex justify-end">
          <Button text="view all" linkTo="/work" />
        </div>
      </div>
    </>
  );
};

export default HomeWork;
