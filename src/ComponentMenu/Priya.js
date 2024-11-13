import React from "react";
import "./Priya.css";

const Priya = () => {
  return (
    <>
  
    <div id="carouselExampleCaptions" className="carousel-priya carousel slide">
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
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
      <p>We held our daughter's first birthday at the Guru Palace banquet hall
        . We were more than happy with this experience. The staff were friendly, helpful,
         and efficient. The owner came to check on us several times during the party to ensure
          all our needs were met. All the guests lovthe                                                            food. We would highly recommend this restaurant for your future events.
          </p>
          <h1>Priya</h1>
    </div>
    <div className="carousel-item">
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
      <p>We held our daughter's first birthday at the Guru Palace banquet hall
        . We were more than happy with this experience. The staff were friendly, helpful,
         and efficient. The owner came to check on us several times during the party to ensure
          all our needs were met. All the guests lovthe                                                            food. We would highly recommend this restaurant for your future events.
          </p>
          <h1>Priya</h1>
      </div>
    <div className="carousel-item">
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
      <p>We held our daughter's first birthday at the Guru Palace banquet hall
        . We were more than happy with this experience. The staff were friendly, helpful,
         and efficient. The owner came to check on us several times during the party to ensure
          all our needs were met. All the guests lovthe                                                            food. We would highly recommend this restaurant for your future events.
          </p>
          <h1>Priya</h1>
    </div>
  </div>
  
</div>


    </>
  )
}

export default Priya;