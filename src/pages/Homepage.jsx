import HomeAbout from '../components/HomeAbout';
import HomeWork from '../components/HomeWork';

const Homepage = () => {
  return (
    <>
      <div className="mt-36  md:mt-44">
        <section>
          <HomeAbout />
        </section>
        <section>
          <HomeWork homeWork={true} />
        </section>
      </div>
    </>
  );
};

export default Homepage;
