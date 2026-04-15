import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/layout/Hero";
import Services from "./components/layout/Services";
import Work from "./components/layout/Work";
import Contact from "./components/layout/Contact";
import Insights from "./components/layout/Insights";
import Footer from "./components/layout/Footer";

// Import all service pages
import WebDevelopment from "./pages/services/WebDevelopment";
import Ecommerce from "./pages/services/Ecommerce";
import CustomSoftware from "./pages/services/CustomSoftware";
import APIDevelopment from "./pages/services/APIDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import LandingPages from "./pages/services/LandingPages";
import WebsiteRedesign from "./pages/services/WebsiteRedesign";
import ATSResume from "./pages/services/ATSResume";
import PortfolioWebsite from "./pages/services/PortfolioWebsite";
import CollegeProjects from "./pages/services/CollegeProjects";
import Maintenance from "./pages/services/Maintenance";
import Performance from "./pages/services/Performance";

function App() {
  return (
   <BrowserRouter>
  <Routes>

    {/* ✅ Layout Wrapper for ALL pages */}
    <Route path="/" element={<Layout />}>
      
      {/* Home Page */}
      <Route index element={
        <>
          <section id="hero"><Hero /></section>
          <section id="services"><Services /></section>
          <section id="work"><Work /></section>
          <section id="contact"><Contact /></section>
          <section id="insights"><Insights /></section>
          <Footer />
        </>
      } />

      {/* Service Pages */}
      <Route path="services/web-development" element={<WebDevelopment />} />
      <Route path="services/ecommerce" element={<Ecommerce />} />
      <Route path="services/custom-software" element={<CustomSoftware />} />
      <Route path="services/api-development" element={<APIDevelopment />} />
      <Route path="services/ui-ux-design" element={<UIUXDesign />} />
      <Route path="services/landing-pages" element={<LandingPages />} />
      <Route path="services/redesign" element={<WebsiteRedesign />} />
      <Route path="services/ats-resume" element={<ATSResume />} />
      <Route path="services/portfolio" element={<PortfolioWebsite />} />
      <Route path="services/projects" element={<CollegeProjects />} />
      <Route path="services/maintenance" element={<Maintenance />} />
      <Route path="services/performance" element={<Performance />} />

    </Route>

  </Routes>
</BrowserRouter>
  );
}

export default App;