import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";

// Lazy load components for better performance
const Hero = lazy(() => import("./components/layout/Hero"));
const Services = lazy(() => import("./components/layout/Services"));
const Work = lazy(() => import("./components/layout/Work"));
const Contact = lazy(() => import("./components/layout/Contact"));
const Insights = lazy(() => import("./components/layout/Insights"));

// Lazy load service pages
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const Ecommerce = lazy(() => import("./pages/services/Ecommerce"));
const Careers = lazy(() => import("./pages/services/Careers"));
const CustomSoftware = lazy(() => import("./pages/services/CustomSoftware"));
const APIDevelopment = lazy(() => import("./pages/services/APIDevelopment"));
const UIUXDesign = lazy(() => import("./pages/services/UIUXDesign"));
const LandingPages = lazy(() => import("./pages/services/LandingPages"));
const WebsiteRedesign = lazy(() => import("./pages/services/WebsiteRedesign"));
const ATSResume = lazy(() => import("./pages/services/ATSResume"));
const PortfolioWebsite = lazy(() => import("./pages/services/PortfolioWebsite"));
const CollegeProjects = lazy(() => import("./pages/services/CollegeProjects"));
const Maintenance = lazy(() => import("./pages/services/Maintenance"));
const Performance = lazy(() => import("./pages/services/Performance"));

// Loading component
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Home page component
const HomePage = () => (
  <>
    <section id="hero"><Hero /></section>
    <section id="services"><Services /></section>
    <section id="work"><Work /></section>
    <section id="contact"><Contact /></section>
    <section id="insights"><Insights /></section>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home Page */}
            <Route index element={<HomePage />} />
            
            {/* Service Pages - Clean & Organized */}
            <Route path="services">
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="ecommerce" element={<Ecommerce />} />
              <Route path="careers" element={<Careers />} />
              <Route path="custom-software" element={<CustomSoftware />} />
              <Route path="api-development" element={<APIDevelopment />} />
              <Route path="ui-ux-design" element={<UIUXDesign />} />
              <Route path="landing-pages" element={<LandingPages />} />
              <Route path="redesign" element={<WebsiteRedesign />} />
              <Route path="ats-resume" element={<ATSResume />} />
              <Route path="portfolio" element={<PortfolioWebsite />} />
              <Route path="projects" element={<CollegeProjects />} />
              <Route path="maintenance" element={<Maintenance />} />
              <Route path="performance" element={<Performance />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;