
import React from 'react';
import CateringHead from '../ComponentCatering/CateringHead';
import Navbar from '../Component/Navbar';
import SectionOneCatring from '../ComponentCatering/SectionOneCatring';
import SectionPackage from '../ComponentCatering/SectionPackage';
import SectionWedding from '../ComponentCatering/SectionWedding';
import SectionParty from '../ComponentCatering/SectionParty';
import SectionAppetizer from '../ComponentCatering/SectionAppetizer';
import Priya from '../ComponentMenu/Priya';
import Footer from '../Component/Footer';

const Catering = () => {
  return (
    <div>
      <Navbar/>

      <CateringHead/>

      <SectionOneCatring/>

      <SectionPackage/>

      <SectionWedding/>

      <SectionParty/>

      <SectionAppetizer/>

      <Priya/>

      <Footer/>
    </div>
  )
}

export default Catering