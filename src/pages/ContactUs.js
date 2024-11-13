import React from 'react';
import Navbar from '../Component/Navbar';
import SectionHead from '../ComponentContactUs/SectionHead';
import SectionContForm from '../ComponentContactUs/SectionContForm';
import Map from '../Component/Map';
import Priya from '../ComponentMenu/Priya';
import Footer from '../Component/Footer';

const ContactUs = () => {
  return (
    <>
      <Navbar/>

      <SectionHead/>

      <SectionContForm/>

      <Map/>

      <Priya/>

      <Footer/>
    </>
  )
}

export default ContactUs;