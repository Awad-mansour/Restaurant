import './Navbar.css';
import "../App.css"
import logo from "../imgs/logo (2).png";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate ();
  const location = useLocation() ;

  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    
    <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link className="logo ms-5" ><img src={logo} alt="logo" /></Link>
  <div className="logo-cont">
  <h2><span>SHANE</span> <span>RESTURANT</span></h2>
  <p>RESTURENT/CATERING/BANQUET</p>
  </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars"></i>    
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-5  ">
        <Link to="/"  class="nav-link  ms-3 active" aria-current="page">HOME</Link>
        <Link to="/Menu" class="nav-link ms-3 " >MENU</Link>
        <Link to="/BamquetFaculity" class="nav-link ms-3" >BANQUET FACELTY</Link>
        <Link to="/Gallery" class="nav-link ms-3">GALLERY</Link>
        <Link to="/Catering" class="nav-link ms-3">CATERING</Link>
        <Link to="/ContactUs" class="nav-link ms-3" >CONTACT US</Link>
        <button onClick={() => navigate("/BookABanquet")} className=" btn-book ms-3 ">BOOK A BANQUET</button>
      </div>
    </div>
  </div>
</nav>
    </header>
  );
};



export default Navbar;