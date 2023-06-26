import React, { useState, useEffect } from "react";
import './Body.css';

import Carousel from './MainPage/Carousel/Carousel.js';

import CardOffer from "./MainPage/CardOffer/CardOffer";

function Body() {
    return (
      <div className="mt-5">
        <Carousel />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <CardOffer />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardOffer />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardOffer />
          </div>
          <div className="col-lg-3 col-md-6">
            <CardOffer />
          </div>
        </div>
      </div>
    );
}

export default Body;