import React from "react";
import "./SectionWedding.css";

const SectionWedding = () => {
  return (
    <>
      <div className="back-color">
        <div className="wedding-main">
          <h1 className="wediing-h1">WEDDING PACKAGES</h1>
          <p className="wedding-p">
            All items to be selected from our Banquet Menu
          </p>
        </div>
        <div className="lists-wedding container">
          <div className="standard">
            <ul>
              <li>STANDARD WEEDING</li>
              <li>DELUX WEEDING</li>
              <li>GOLD PACKAGES</li>
              <li>OPTIONAL ITEMS</li>
            </ul>
          </div>
          <div className="cocktail">
            <ul>
              <li>COCKTAIL HOUR</li>
              <li>One Vegetarian Appetizer</li>
              <li>( Butler Pass )</li>
              <li>One Non-Veg Appetizer</li>
              <li>( Butler Pass )</li>
              <li>Two Vegetarian Appetizers</li>
              <li>( Tabled )</li>
              <li>One Non-Veg Appetizer</li>
              <li>( Tabled )</li>
            </ul>
          </div>
          <div className="buffet">
            <ul>
              <li>THE WEDDING BUFFET DINNER</li>
              <li>One Chicken Entree</li>
              <li>One Lamb or Goat Entree</li>
              <li>One Paneer Entree</li>
              <li>Two Vegetable Entree</li>
              <li>One Dal/ Lentil Entree</li>
              <li>One Choice of Rice</li>
              <li>Three Choices of Bread</li>
              <li>Salad Bar</li>
              <li>Raita</li>
              <li>Achar</li>
              <li>Papad</li>
            </ul>
          </div>
          <div className="desserts">
            <ul>
              <li>DESSERTS
              </li>
              <li>Choice of Two </li>
              <li>Desserts
              </li>
            </ul>
          </div>
          <div className="extras">
            <ul>
              <li>EXTRAS
              </li>
              <li>Sales Tax</li>
              <li>Catering Staff</li>
              <li>Food Handlers</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWedding;
