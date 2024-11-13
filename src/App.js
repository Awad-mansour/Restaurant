import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import Menu from './pages/Menu';
import BamquetFaculity from './pages/BamquetFaculity';
import Review from './ComponentBanquet/Review';
import Gallery from './pages/Gallery';
import Catering from './pages/Catering';
import ContactUs from "./pages/ContactUs";
import BookABanquet from "./pages/BookABanquet";

function App() {
  
  return (
    <div>
    <Router>
        
        <Routes>
         <Route path='/' element={<Home/>}/> 
         <Route path='Menu' element={<Menu/>}/> 
         <Route path='BamquetFaculity' element={<BamquetFaculity/>}/> 
         <Route path='Gallery' element={<Gallery/>}/> 
         <Route path='Review' element={<Review/>}/> 
         <Route path='Catering' element={<Catering/>}/> 
         <Route path='ContactUs' element={<ContactUs/>}/> 
         <Route path='BookABanquet' element={<BookABanquet/>}/> 
        </Routes>

    </Router>
    </div>
  );
}

export default App;
