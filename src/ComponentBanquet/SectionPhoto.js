import React from "react";
import "./SectionPhoto.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SectionPhoto = () => {

  const arr = [
    { id: 1, category: 'Electronics',name: 'Product 1',img: require("../imgs/Rectangle 74.png") },
    { id: 2,category: 'Electronics', name: 'Product 2',img: require("../imgs/Rectangle 75.png") },
    { id: 3,category: 'Electronics',name: 'Product 3', img: require("../imgs/Rectangle 76.png") },
    { id: 4,category: 'Electronics',name: 'Product 4', img: require("../imgs/Rectangle 77.png") },
    { id: 5,category: 'Napkinsavlable',name: 'Product 5',img: require("../imgs/Rectangle 78.png") },
    { id: 6,category: 'Napkinsavlable',name: 'Product 6',img: require("../imgs/Rectangle 79.png") },
    { id: 7,category: 'Napkinsavlable',name: 'Product 7',img: require("../imgs/Rectangle 80.png") },
    { id: 8,category: 'Napkinsavlable',name: 'Product 8',img: require("../imgs/Rectangle 81.png") },
    { id: 9,category: 'Clothing',name: 'Product 9',img: require("../imgs/Rectangle 82.png") },
    { id: 10,category: 'Clothing',name: 'Product 10',img: require("../imgs/Rectangle 83.png") },
    { id: 11,category: 'Clothing',name: 'Product 1',img: require("../imgs/Rectangle 84.png") },
    { id: 12,category: 'Clothing',name: 'Product 12',img: require("../imgs/Rectangle 85.png") },
    { id: 13,category: 'Tablecloths',name: 'Product 12',img: require("../imgs/Rectangle 85.png") },
    { id: 14,category: 'Tablecloths',name: 'Product 12',img: require("../imgs/Rectangle 85.png") },
    { id: 15,category: 'Tablecloths',name: 'Product 12',img: require("../imgs/Rectangle 85.png") },
    { id: 16,category: 'Tablecloths',name: 'Product 12',img: require("../imgs/Rectangle 85.png") },
  ];

  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(arr);
  const filterByCategory = (category) => {
    if (category === 'All') {
      setFilteredProducts(arr); 
    } else {
      setFilteredProducts(arr.filter(item => item.category === category)); 
    }
  };
  return (
    <>
    
    <div className="butoon-have container d-flex justify-content-evenly">
    <button onClick={() => filterByCategory('All')}>FILTER-ALL</button>
    <button onClick={() => filterByCategory('Electronics')}>SHANE</button>
      <button onClick={() => filterByCategory('Clothing')}>SHAGUN</button>
      <button onClick={() => filterByCategory('Tablecloths')} >TABLE CLOTHS</button>
      <button onClick={() => filterByCategory('Napkinsavlable')} >NAPKINS AVLABLE </button>
      <button onClick={() => navigate("/Review")}>Review </button>
    </div>

    <div className=" container d-flex justify-content-evenly flex-wrap w-75">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.name} />
            
          </div>
        ))}
      </div>
    </>
  )
}


export default SectionPhoto;