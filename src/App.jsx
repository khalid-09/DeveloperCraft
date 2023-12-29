import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
