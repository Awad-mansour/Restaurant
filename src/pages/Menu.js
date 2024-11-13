import React from "react";
import Navbar from "../Component/Navbar";
import "./Menu.css"
import SectionMenu from "../ComponentMenu/SectionOneMenu";
import SectionTow from "../ComponentMenu/SectionTow";
import DownloadButton from "../ComponentMenu/ButtonMenu";
import Food from "../ComponentMenu/Food";
import Priya from "../ComponentMenu/Priya";
import Footer from "../Component/Footer";


const Menu = () => {
  return(
    <>
    <Navbar/>
    
    <SectionMenu/>

    <DownloadButton/>

    <SectionTow>
      <img src={require("../imgs/Rectangle 42.png")} alt="" />
    </SectionTow>

    <DownloadButton name="downlaod"/>

    <SectionTow>
      <img src={require("../imgs/Rectangle 43.png")} alt="" />
    </SectionTow>

    <DownloadButton/>

    <SectionTow>
      <img src={require("../imgs/Rectangle 44.png")} alt="" />
    </SectionTow>

    <Food/>

    <Priya/>

    <Footer/>
    </>
  )
}

export default Menu;