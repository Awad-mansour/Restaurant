import React from "react";
import "./SectionPackage";

const CardPackage = ({ title, price, children }) => {
  return (
    <>
      <div className="package-content container ">
        <div className="package-card">
          <h2>{title}</h2>

          {children}
        </div>

        <div className="package-price mb-4">
          <button>{price}</button>
        </div>
      </div>
    </>
  );
};

export default CardPackage;
