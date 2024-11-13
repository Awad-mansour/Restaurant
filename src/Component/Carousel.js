import React from "react";
import "./Carousel.css"
const Carousel = () => {
  return (
    <>
    <section className="sec-one">
        <div id="carouselExampleCaptions" className="carousel slide ">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../imgs/Rectangle 40.png")}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block mb ">
                <h1>SERVING BEST RESTURENT CATRING &</h1>
                <h1 className="head-1" >BONQUET SERVICES IN NEW JERCY</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../imgs/Rectangle 40 (1).png")}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="">SERVING BEST RESTURENT CATRING &</h1>
                <h1 className="head-1">BONQUET SERVICES IN NEW JERCY</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../imgs/Rectangle 40 (2).png")}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="">SERVING BEST RESTURENT CATRING &</h1>
                <h1 className="head-1">BONQUET SERVICES IN NEW JERCY</h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    
    
    </>
  )
}

export default Carousel;