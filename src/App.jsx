import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import HomePage1 from "./Page/HomePage1";
import ServicesPage from "./Page/ServicesPage";
import ServiceDetailsPage from "./Page/ServiceDetailsPage";
import Blogpage from "./Page/Blogpage";
import BlogDetailsPage from "./Page/BlogDetailsPage";
import AboutPage from "./Page/AboutPage";
import ContactPage from "./Page/ContactPage";
import ProjectsPage from "./Page/ProjectsPage";
import ProjectDetailsPage from "./Page/ProjectDetailsPage";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/serviceDetails/:id" element={<ServiceDetailsPage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blogDetails/:id" element={<BlogDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/projectDetails/:id" element={<ProjectDetailsPage />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
