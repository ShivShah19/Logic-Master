import "./home.css";
import NavBar from "./NavBar";
import Container from "./Container";
import Aboutus from "./Aboutus";
import Cards from "./Cards";
import Section from "./Section";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

const Home = () => {
  const myStyle = {
    background: "#061032",
    background:
      "linear-gradient(180deg, hsla(227, 78%, 11%, 1) 15%, #313a5e 27%, #CBCFDD 92%)",
    filter:
      'progid:DXImageTransform.Microsoft.gradient(startColorstr="#060F31", endColorstr="#30395D", GradientType=1)',
  };
  return (
    <div style={myStyle}>
      <NavBar />
      <Container />
      <Cards />
      <Section />
      <Aboutus />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
