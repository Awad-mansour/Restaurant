import React from "react";
import "./SectionFour.css"
import { useNavigate } from "react-router-dom";

const SectionFour = () => {
  const navigate = useNavigate();

  return(
    <>
    <div className="our-menu">
      <div className="our-menu-ccont">
      <h2>our menu</h2>
      <p>Guru Palace is the ideal location for whatever the occasion; a casual get together, a special occasion or group dining. We are equipped with the very best equipments for outdoors and our massive production line enables us to produce food for up to 
      2000 people.</p>
      <button onClick={() => navigate("/Menu")} >check our full menu</button>
    </div>
    </div>
    </>
  )
}

export default SectionFour;