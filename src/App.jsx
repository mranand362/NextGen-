// client/src/App.jsx
import React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/layout/Hero";
import Services from "./components/layout/Services";
import Work from "./components/layout/Work";
import Contact from "./components/layout/Contact";
import Insights from "./components/layout/Insights";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Layout>
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="work"><Work /></section>
      <section id="contact"><Contact /></section>
      <section id="insights"><Insights /></section>
      <Footer />
    </Layout>
  );
}

export default App;