import React, { useState } from "react";
import "./BookAbanquet.css";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const BookABanquet = () => {
  const navigat = useNavigate();

  const [banquetForm, setbanquetForm] = useState({
    guest: "",
    email: "",
    number: 0,
    date: "",
    guests: "",
    message: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();

  
  localStorage.setItem ("banquetForm", JSON.stringify(banquetForm));
  setbanquetForm({
    guest: "",
    email: "",
    number: 0,
    date: "",
    guests: "",
    message: "",
  });
  Swal.fire("Your banquet is successfully").then(() => {
    navigat("/");
  });
}

  return (
    <>
      <div className="book-banquet container">
        <h3>BOOK A BANQUET</h3>
        <form
        onSubmit={handelSubmit}
        >
          <input
            id="input"
            type="text"
            placeholder="GUEST*"
            required
            value={banquetForm.guest}
            onChange={(evevnt) => {
              setbanquetForm({ ...banquetForm, guest: evevnt.target.value });
            }}
          />

          <br />
          <input
            id="input"
            type="email"
            placeholder="EMAIL*"
            required
            value={banquetForm.email}
            onChange={(event) => {
              setbanquetForm({ ...banquetForm, email: event.target.value });
            }}
          />
          <br />
          <input
            id="input"
            type="number"
            placeholder="NUMBER*"
            required
            value={banquetForm.number}
            onChange={(event) => {
              setbanquetForm({ ...banquetForm, number: event.target.value });
            }}
          />
          <br />
          <input
            id="input"
            type="date"
            required
            value={banquetForm.date}
            onChange={(event) => {
              setbanquetForm({ ...banquetForm, date: event.target.value });
            }}
          />
          <br />
          <input
            id="input"
            type="text"
            placeholder="GUESTS"
            required
            value={banquetForm.guests}
            onChange={(event) => {
              setbanquetForm({ ...banquetForm, guests: event.target.value });
            }}
          />
          <br />
          <textarea
            name=""
            id="input"
            placeholder="YOUR MESSAGE"
            value={banquetForm.message}
            onChange={(event) => {
              setbanquetForm({ ...banquetForm, message: event.target.value });
            }}
          ></textarea>
          <br />
          <button type="submit">SEND INQUIRES</button>
        </form>
      </div>
    </>
  );
};

export default BookABanquet;
