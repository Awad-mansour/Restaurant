import React from "react";
import "./SectionPackage.css";
import CardPackage from "./CardPackage";

const SectionPackage = () => {

  return (
    <>
      <div className="package-section">
        <div  className="package-background">
          <div className="package-description container">
            <p>
              Note: All catering packages (Express, Silver, Gold, and Platinum)
              for New Year's Eve 2022 require a minimum of 50 people.
            </p>
          </div>
          <div className=" main-card-package">
            <CardPackage title="Express Package" price="$13 PER PERSON">
              <ul>
                <li>2 Appetizers</li>
                <li>1 Veg Entrée</li>
                <li>1 Non-Veg Entrée</li>
                <li>Rice / Naan</li>
                <li>1 Dessert</li>
                <li>Min. 50 people</li>
                <li>All pricing subject to change</li>
              </ul>
            </CardPackage>
            <CardPackage title="Silver Package" price="$20 PER PERSON">
              <ul>
                <li>3 Appetizers</li>
                <li>2 Vegetarian + 1 Non – Veg</li>
                <li>2 Veg Entrée</li>
                <li>1 Non-Veg Entrée</li>
                <li>Rice</li>
                <li>Naan</li>
                <li>1 Dessert</li>
                <li>Min.50 people</li>
                <li>All pricing subjects </li>
                <li>to change</li>
              </ul>
            </CardPackage>
            <CardPackage title="Gold Package" price="$50 PER PERSON">
              <ul>
                <li>4 Appetizers</li>
                <li>2 Vegetarian + 2 Non – Veg</li>
                <li>2 Veg Entrée</li>
                <li>2 Non-Veg Entrée</li>
                <li>Pulao / Biryani</li>
                <li>Assorted Bread</li>
                <li>1 Dessert</li>
                <li>Min.50 people</li>
                <li>All pricing subjects </li>
                <li>to change</li>
              </ul>
            </CardPackage>
            <CardPackage title="Platinum Package" price="$40 PER PERSON">
              <ul>
                <li>5 Appetizers</li>
                <li>3 Vegetarian + 2 Non – Veg</li>
                <li>3 Veg Entrée</li>
                <li>2 Non-Veg Entrée</li>
                <li>Pulao / Biryani</li>
                <li>Assorted Bread</li>
                <li>2 Dessert</li>
                <li>Min.50 people</li>
                <li>All pricing subjects </li>
                <li>to change</li>
              </ul>
            </CardPackage>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionPackage;
