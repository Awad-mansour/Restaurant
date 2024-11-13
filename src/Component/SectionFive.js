import React from "react";
import "./SectionFive.css"

const SectionFive = () => {
  return(
    <>
    
    <div className="shane">
      
      <div className="cont-tow-shne">
        <button>SHANE RESTURENT</button>
        <p>OPEN FOR OUTDOOR <br /> DINE-IN MONDAY - JUNE 15</p>
        <span>Dine-in <br /> Take-out <br /> Catering <br /> Play trays</span>
      </div>
      <div className="cont-one-shne">
        <h3>How We Keep You Safe From COVID-19</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita qui reprehenderit, architecto, dignissimos odit ullam consectetur at veritatis, aut ipsum molestias! Veniam magnam inventore rerum! Dignissimos quidem id perspiciatis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, deserunt commodi. Quam, eum quasi molestiae repellendus deserunt, voluptas similique deleniti nobis sapiente quas dolorum, animi alias ducimus? Quia, et voluptates!</p>
        <button>ARDER SAFELY</button>
        
      </div>

      <div className="imge-shane">
        <img src={require("../imgs/images (5).jpeg")} alt="" />
      </div>
    </div>
    
    </>
  )
}

export default SectionFive;