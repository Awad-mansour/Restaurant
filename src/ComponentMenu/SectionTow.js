import React from "react";
import "./SectionTow.css";

const SectionTow = ({children}) => {
  return(
    <>
    <div className="container">
      {/* <img src={require("../imgs/Rectangle 42.png")} alt="" /> */}
      {children}
    </div>
    </>
  )
}

export default SectionTow;