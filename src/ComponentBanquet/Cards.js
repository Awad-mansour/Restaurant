import React from "react";
import "./Cards.css";
 import { useNavigate } from "react-router-dom";




const Cards = ({img, title, disc, click, children}) => {
  

 const navigate = useNavigate();

const handclick = () =>{
  click();
   navigate('/');
}
  return (
    <>
    
      <div className="main-card">
        <div className="card ">
        <img src={img} alt="" />
        <h1>{children}</h1>
        <h3>{title}</h3>
        <p>{disc}</p>
        <button onClick={handclick}>go to home</button>
        </div>
      </div>
      </>
  )
}

export default Cards;