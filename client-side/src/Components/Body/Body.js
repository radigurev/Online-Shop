import React, { useState, useEffect } from "react";
import './Body.css';
import $ from "jquery";
import Carousel from './MainPage/Carousel/Carousel.js';
import CardOffer from "./MainPage/Cards/CardOffer/CardOffer";
import CardCategory from "./MainPage/Cards/CardCategory/ResponsiveCardCategory/CardCategory";
import StaticCardCategory from "./MainPage/Cards/CardCategory/StaticCardCategory/CardCategory";
import Modal from "../Body/Modal/Modal";


const Body = props => {

  useEffect( () => {
    let modal = $("#mainModal");
    let deactivateBackground = $("#deactivate-background");
        if (props.openModal) {
          modal.removeClass("hidden");
          deactivateBackground.removeClass("hidden");
          deactivateBackground.animate({opacity: '1'});
          modal.animate({ top: "55%" }, 300);


        } else {
          modal.animate({ top: "200%" });
          deactivateBackground.animate({opacity: '0'});
          setTimeout(() => {
            modal.addClass("hidden");
            deactivateBackground.addClass("hidden");
          }, 600);
        }
    
  }, [props.openModal]);
  

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
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <CardCategory />
          </div>

          <div className="col-lg-3 col-md-6">
            <CardCategory />
          </div>

          <div className="col-lg-3 col-md-6">
            <CardCategory />
          </div>

          <div className="col-lg-3 col-md-6">
            <CardCategory />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <StaticCardCategory />
          </div>

          <div className="col-lg-3 col-md-6">
            <StaticCardCategory />
          </div>

          <div className="col-lg-3 col-md-6">
            <StaticCardCategory />
          </div>

          <div className="col-lg-3 col-md-6">
            <StaticCardCategory />
          </div>
        </div>

        <Modal></Modal>
      </div>
    );
}

export default Body;