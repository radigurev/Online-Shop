import React, { useState, useEffect } from "react";
import './Body.css';
import $ from "jquery";
import Carousel from './MainPage/Carousel/Carousel.js';
import CardOffer from "./MainPage/Cards/CardOffer/CardOffer";
import CardCategory from "./MainPage/Cards/CardCategory/ResponsiveCardCategory/CardCategory";
import StaticCardCategory from "./MainPage/Cards/CardCategory/StaticCardCategory/CardCategory";
import Modal from "../Body/Modal/Modal";


const Body = props => {
//MODAL EFFECTS
  useEffect( () => {
    let modal = $("#mainModal");
    let deactivateBackground = $("#deactivate-background");
    let body = $("#body");

    if (props.openModal) {
          modal.removeClass("hidden");
          deactivateBackground.removeClass("hidden");
          deactivateBackground.animate({opacity: '1'});
          modal.animate({ top: "55%" }, 700);
          body.css({overflow: 'hidden'});      

        setTimeout(() => {
          modal.animate({ borderRadius: "15px" }, 900);
        }, 350);

        } else {
          modal.animate({ top: "200%" });
          deactivateBackground.animate({opacity: '0'});

          body.css({overflowY: 'auto'});      
          setTimeout(() => {
            modal.addClass("hidden");
            deactivateBackground.addClass("hidden");
            modal.css({ borderRadius: "0" });
          }, 600);
        }
    
  }, [props.openModal]);



  //MODAL END

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

        <Modal CloseModal={props.CloseModal} modalType = {props.modalType}/>
      </div>
    );
}

export default Body;