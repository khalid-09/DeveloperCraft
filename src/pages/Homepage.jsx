import Footer from '../components/Footer';
import HomeAbout from '../components/HomeAbout';
import HomeWork from '../components/HomeWork';
import PageNav from '../components/PageNav';

const Homepage = () => {
  return (
    <div className="text-white mx-auto md:w-[650px] w-[400px] sm:w-[550px]">
      <div className="">
        <PageNav />
        <div className="mt-44">
          <HomeAbout />
          <HomeWork />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
