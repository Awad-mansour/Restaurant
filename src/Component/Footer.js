import React from "react";
import "./Footer.css"


const Footer = () =>{
  return(
    <>
  {/* Footer */}
  <footer className=" text-center text-lg-start text-muted">
    
    {/* Section: Links  */}
    <section className="back-color">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4 mt-5">
            have a message?
            </h6>
            <input type="text"placeholder="NAME*" />
            <br />
            <br />
            <input type="email"placeholder="EMAIL*" />
            <br />
            <br />
            <input type="number"placeholder="NUMBER*" />
            <br />
            <br />
            <input type="text"placeholder="YOUR MESSAGE*" />
            <br />
            <br />
            <button>SEND INQUIRES</button>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4 mt-5">Contact Us</h6>
            <p>
              <a href="#!" className="text-black">
              2215 US Highway 1 South, North Brunswick, NJ 08902
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Call Us At
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              P : 732.398.9022
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              M: 917.518.4331
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              M: 347.784.9269
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Fax: 732.658 3700    
             </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Email: gurupalace@hotmail.com        
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4 mt-5">Qucik links</h6>
            <p>
              <a href="#!" className="text-black">
                Home
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
                Menu
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Banquet Facility
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Gallery
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Catering
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Events
              </a>
            </p>
            <p>
              <a href="#!" className="text-black">
              Contact Us
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4 mt-5">Hours of opration</h6>
            
            <p className="text-black">
            6 DAYS OPEN
            </p>
            <p className="text-black">
            Monday, Wednesday-Friday : 11AM To 3PM
            </p>
            <p className="text-black">
            Monday, Wednesday-Friday : 5PM To 9:30PM
            </p>
            <p className="text-black">
            Saturday-Sunday : 10AM To 9:30PM
            </p>
            <p className="text-black">
            Tuesday: Closed           
             </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
  </footer>

  <div className="foot-end">
        <img src={require("../imgs/logo (2).png")} alt="" />
        <p>Copyright © 2007-2019 SHANE-Restaurants. All Rights Reserved.
        Website designed by <span>RAMEEZ UDDIN  SOFTECH SOLUTIONS</span> </p>
      </div>
  {/* Footer */}
</>

  )
}
export default Footer;