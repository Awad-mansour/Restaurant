import React from "react";
import "./SectionThree.css";
import { useNavigate } from "react-router-dom";

const SectionThree = () =>{
  const navigate = useNavigate();
  return(
    <>
    <div className="cattering rwo">
      <h2>CATTERING FOR ALL OCCASSION -GURU CATERS</h2>
      <div className="imge-one col">
        <img src={require("../imgs/Rectangle 20.png")} alt="" />
      </div>
      <div className="imge-tow col">
        <img src={require("../imgs/Rectangle 21.png")} alt="" />
      </div>
      <div className="imge-three col">
        <img src={require("../imgs/Rectangle 22.png")} alt="" />
      </div>
      <button onClick={() => navigate("/Catering")} >click here for packages</button>
    </div>
    
    </>
  )
}
export default SectionThree;