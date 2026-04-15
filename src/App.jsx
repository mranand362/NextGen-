import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/layout/Hero";
import Services from "./components/layout/Services";
import Work from "./components/layout/Work";
import Contact from "./components/layout/Contact";
import Insights from "./components/layout/Insights";
import Footer from "./components/layout/Footer";

// Import all service pages
import WebDevelopment from "./pages/WebDevelopment";
import Ecommerce from "./pages/Ecommerce";
import CustomSoftware from "./pages/CustomSoftware";
import APIDevelopment from "./pages/APIDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import LandingPages from "./pages/LandingPages";
import WebsiteRedesign from "./pages/WebsiteRedesign";
import ATSResume from "./pages/ATSResume";
import PortfolioWebsite from "./pages/PortfolioWebsite";
import CollegeProjects from "./pages/CollegeProjects";
import Maintenance from "./pages/Maintenance";
import Performance from "./pages/Performance";

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