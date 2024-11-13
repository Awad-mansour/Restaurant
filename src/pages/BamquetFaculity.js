import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./BamquetFaculity.css";
import "../ComponentBanquet/Button.css";
import Navbar from "../Component/Navbar";
import SectionOne from "../ComponentBanquet/sectionOne";
import SectionTow from "../ComponentBanquet/SectionTow";
import SectionPhoto from "../ComponentBanquet/SectionPhoto";
import Footer from "../Component/Footer";

const BamquetFaculity = () => {
  

  return (
    <>
      <Navbar />

      <SectionOne />

      <SectionTow />
      
      
      <br />
      <br />
    
      <SectionPhoto/>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default BamquetFaculity;
