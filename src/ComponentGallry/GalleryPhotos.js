import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryPhotos = () => {

  const images = [
    [require("../imgs/Rectangle 48.png"),require("../imgs/Rectangle 49.png"), require("../imgs/Rectangle 50.png"), require("../imgs/Rectangle 51.png"), require("../imgs/Rectangle 51 (1).png")],
    [require("../imgs/Rectangle 48.png"),require("../imgs/Rectangle 49.png"), require("../imgs/Rectangle 50.png"), require("../imgs/Rectangle 51.png"), require("../imgs/Rectangle 51 (1).png")],
    [require("../imgs/Rectangle 48.png"),require("../imgs/Rectangle 49.png"), require("../imgs/Rectangle 50.png"), require("../imgs/Rectangle 51.png"), require("../imgs/Rectangle 51 (1).png")],
    [require("../imgs/Rectangle 48.png"),require("../imgs/Rectangle 49.png"), require("../imgs/Rectangle 50.png"), require("../imgs/Rectangle 51.png"), require("../imgs/Rectangle 51 (1).png")],
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <button
        style={{
          borderRadius: '50%',
          width: '15px',
          height: '15px',
          border: 'none',
          backgroundColor: 'gray', 
          margin: '20px 5px',
          cursor: 'pointer',
          outline: 'none',
          
        }}
      />
    ),
  };

  return (
    <div className="slider-container" style={{ margin: "20px" }}>
      <Slider {...settings} className='container'>
        {images.map((group, groupIndex) => (
          <div key={groupIndex}>
            <div className='gallery-slid' style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
              {group.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", maxWidth: "250px", height: "auto", objectFit: "cover" }} 
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GalleryPhotos;