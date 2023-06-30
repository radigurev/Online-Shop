import React from "react";
import ReactDOM from 'react-dom/client';
import './CardOffer.scss';

function CardOffer() {
    return (
<main role="main">
  <div className="product">
    <figure>
      <img src="https://raw.githubusercontent.com/itbruno/productpreview/master/assets/img/t-shirt.jpg" alt="Product Image" className="product-image"/>
        </figure>

      <div className="product-description">

        <div className="info">
          <h1>LOREM IPSUM</h1>
          <p>
            Lorem Ipsum is simply dummy
            printing and typesetting industry
          </p>
        </div>

        <div className="price">
          89
        </div>
      </div>

      <div className="product-sidebar">
        <button className="buy">
          <span>BUY ITEM</span>
        </button>

        <button className="info">
          <span>MORE INFO</span>
        </button>

        <button className="size">
          <span>SIZES</span>
        </button>

        <button className="colors">
          <span>
            <a href="" className="color black"></a>
            <a href="" className="color white"></a>
            <a href="" className="color red"></a>
          </span>
        </button>
      </div>
      </div>
    </main>
    );
}

export default CardOffer;