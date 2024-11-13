import React from 'react';
import "./SectionAppetizer.css";

const SectionAppetizer = () => {
  return (
    <>
    <div className="appetizer">
      <div className="main-app container">
      <h1>APPETIZERS</h1>
      <div className="item-appet">
        <p>BREAD </p>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
      <div className="item-appet">
        <p>FRIED RICE & NOODLE </p>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
      <div className="item-appet">
        <p>NON-VEGETARIAN </p>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
      <div className="item-appet">
        <p>BIRYANI </p>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
      <div className="item-appet">
        <p>DESSERTS </p>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
      <div className="item-appet">
        <p>VEG- HORS D’OEUVRES </p>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
      <div className="item-appet">
        <p>NON- VEG HORS D’OEUVRES </p>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
    </div>
    </div>
    </>
  )
}

export default SectionAppetizer