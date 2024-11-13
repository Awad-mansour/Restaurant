import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "./Home.css";
import Footer from "./Footer";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Map from "./Map";

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <Carousel/>

    <SectionOne/>

    <SectionTwo/>

    <SectionThree/>

    <SectionFour/>

    <SectionFive/>

    <SectionSix/>

    <Map/>

    <Footer/>

    
    </div>
  );
};
export default Home;
