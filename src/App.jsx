import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <PageNotFound />,
//     children: [
//       { path: "/", element: <Homepage /> },
//       { path: "/about", element: <About /> },
//       { path: "/work", element: <Work /> },
//       { path: "/blog", element: <Blog /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
