import React from 'react'
import Navbar from '../Component/Navbar'
import GalleryHead from '../ComponentGallry/GalleryHead'
import GalleryPhotos from '../ComponentGallry/GalleryPhotos'
import Priya from '../ComponentMenu/Priya'
import Footer from '../Component/Footer'

const Gallery = () => {
  return (
    <>
    <Navbar/>

    <GalleryHead/>

    <GalleryPhotos/>

    <Priya/>

    <Footer/>
    </>
  )
}

export default Gallery