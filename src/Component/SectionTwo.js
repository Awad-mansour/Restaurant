import react from 'react';
import "./Section-Two.css";

const SectionTwo = () =>{
  return(
    <>
    <div className='sec-two'>
      <div className="sec-two-imge">
        <img src={require("../imgs/Rectangle 13.png")} alt="" />
      <div className="content">
        <h2>OUR STORIES</h2>
        <p>At Guru Palace Indian Restaurant, we offer distinctive cuisine in an informal, friendly setting. Our restaurant enjoys a reputation for impeccable service, elegant Asian-style décor, and exquisite Indian food. Dining at our restaurant is like visiting India without leaving your hometown–an exciting blend of authentic Indian food, culture, and atmosphere awaits.</p>
        <button>KNOW ABOUT US</button>
      </div>
      </div>
      <div className="icons">
        <img src={require("../imgs/fork-plate-spoon-icon-vector-18008832-removebg-preview 1.png")} alt="" />
        <img src={require("../imgs/images-removebg-preview (14) 1.png")} alt="" />
        <img src={require("../imgs/logo-removebg-preview 1.png")} alt="" />
      </div>
    </div>
    
    </>
  )
}

export default SectionTwo;