import { Outlet } from 'react-router-dom';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';

const AppLayout = () => {
  return (
    <div className="mx-auto w-[380px] text-white sm:w-[550px] md:w-[680px]">
      <PageNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
