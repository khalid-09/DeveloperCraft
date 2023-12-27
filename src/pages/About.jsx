import AboutCard from '../components/AboutCard';
import ExperienceCard from '../components/ExperienceCard';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <>
      <div className="mt-28  md:mt-32">
        <section>
          <AboutCard />
        </section>
        <section className="mb-8 mt-2 flex flex-col gap-3 md:flex-row md:gap-4">
          <ExperienceCard />
          <SocialLinks />
        </section>
      </div>
    </>
  );
};

export default About;
