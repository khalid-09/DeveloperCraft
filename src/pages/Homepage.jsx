import HomeAbout from '../components/HomeAbout';
import PageNav from '../components/PageNav';

const Homepage = () => {
  return (
    <div className="text-white mx-auto md:w-[650px] w-[400px] sm:w-[550px]">
      <PageNav />
      <div className="mt-24">
        <HomeAbout />
      </div>
    </div>
  );
};

export default Homepage;
