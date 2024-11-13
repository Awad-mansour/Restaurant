import React from 'react'
import Navbar from '../Component/Navbar';
import ReviewHead from "./ReviewHead";
import ReviewSectionOne from "./ReviewSectionOne"
import ReviewSectionTow from "./ReviewSectionTow"
import Priya from '../ComponentMenu/Priya';
import Footer from '../Component/Footer';

const Review = () => {
  return (
    <>
    <Navbar/>

    <ReviewHead/>
    
    <ReviewSectionOne/>

    <ReviewSectionTow/>

    <Priya/>

    <Footer/>
    
    </>
  )
}

export default Review