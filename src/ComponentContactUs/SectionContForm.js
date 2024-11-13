import React, { useState } from "react";
import "./SectionContForm.css";
import Swal from "sweetalert2";

const SectionContForm = () => {
  const [infoForm, setInfoForm] = useState({
    name: "",
    email: "",
    supject: "",
    message: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();

    Swal.fire("Your message is send");
    
    setInfoForm({
      name: "",
      email: "",
      supject: "",
      message: "",
    });
  }
  return (
    <>
      <div className="main-form">
        <p className="Please">Please contact the team with the enquiries you may have</p>
        <div className="info container">
          <div className="info-info">
            <div className="address">
              <p>Mailing Address</p>
              <p>2215 US Highway 1 South North Brunswick, NJ 08902</p>
            </div>
            <div className="Phone">
              <p>Phone</p>
              <p>P : 732.398.9022</p>
              <p>M: 917.518.4331</p>
              <p>M: 347.784.9269</p>
            </div>
            <div className="Fax">
              <p>Fax</p>
              <p>732.658 3700</p>
            </div>
            <div className="Enquiries">
              <p>Enquiries</p>
              <p>gurupalace@hotmail.com</p>
            </div>
            <div className="CateringContact">
              <p>For Banquet / Catering Contact:</p>
              <p>Mr. Singh</p>
              <p>917.518.4331</p>
              <p>347.784.9269</p>
            </div>
          </div>


          <form className="info-submit"
          onSubmit={handelSubmit}
          >
            <input type="text" 
            placeholder="NAME*"
            required
            value={infoForm.name}
            onChange={(event) => {
              setInfoForm({...infoForm, name: event.target.value});
            }}
            />
            <br />
            <input type="email"
             placeholder="EMAIL*"
             required
             value={infoForm.email}
             onChange={(event) => {
              setInfoForm({...infoForm, email: event.target.value});
             }}
             />
            <br />
            <input type="text"
             placeholder="SUPJECT*" 
             value={infoForm.supject}
             onChange={(event) => {
              setInfoForm ({...infoForm, supject: event.target.value});
             }}
             />
            <br />
            <textarea placeholder="MESSAGE*"
             name="MESSAGE" id=""
             required
             value={infoForm.message}
             onChange={(event) => {
              setInfoForm({...infoForm, message: event.target.value});
             }}

             
             ></textarea>
              <br />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionContForm;
