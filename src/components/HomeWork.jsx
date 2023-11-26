import projectIcon from '../assets/icons/projects.svg';
import WorkCard from './WorkCard';
import projectData from '../constants/HomeWorkProject';

const HomeWork = () => {
  return (
    <>
      <p className="ml-5 mt-16 font-poppins text-sm font-semibold ">Work</p>
      <div className=" w-full bg-lightBg rounded-2xl mb-4 px-4 py-4 mt-4 ">
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
      </div>
    </>
  );
};

export default HomeWork;
