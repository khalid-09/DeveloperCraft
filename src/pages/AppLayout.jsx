import { Outlet } from 'react-router-dom';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';

const AppLayout = () => {
  return (
    <div className="mx-auto w-[390px] text-white sm:w-[550px] md:w-[650px]">
      <PageNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
