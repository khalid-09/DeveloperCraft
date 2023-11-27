import projectIcon from '../assets/icons/projects.svg';
import WorkCard from './WorkCard';
import projectData from '../constants/HomeWorkProject';
import Button from './Button';

const HomeWork = () => {
  return (
    <>
      <p className="ml-5 mt-16 font-poppins text-medium dark:text-white text-mainBg font-bold ">
        Work
      </p>
      <div className="w-full bg-mainBg dark:bg-lightBg rounded-2xl mb-4 px-4 py-4 mt-4 ">
        <div className="flex gap-3 items-center justify-start ml-2">
          <img src={projectIcon} alt="project-icon" className="" />
          <p className="uppercase  text-[#57534e] text-sm font-semibold">
            Projects
          </p>
        </div>
        {projectData.map(project => (
          <WorkCard
            title={project.title}
            desc={project.desc}
            skills={project.skills}
            imgURL={project.imgURL}
            titlelink={project.titlelink}
            key={project.title}
          />
        ))}
        <div className="flex justify-end mt-3">
          <Button text="view all" linkTo="/work" />
        </div>
      </div>
    </>
  );
};

export default HomeWork;
