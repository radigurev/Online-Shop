import React, { useState, useEffect } from "react";
import "./Carousel.css";
import $ from "jquery";
import Carousel from 'react-bootstrap/Carousel'
let CarouselItemHeight = '500px';

function CarouselComponent() {
    

 return (
   <Carousel>
     <Carousel.Item style={{ height: CarouselItemHeight }}>
       <img
         className="d-block w-100"
         src="https://media.bizj.us/view/img/11870412/thredup*800xx1184-667-67-0.jpg"
         alt="First slide"
       />
       <Carousel.Caption className="disapear-width">
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item style={{ height: CarouselItemHeight }}>
       <img
         className="d-block w-100"
         src="https://media.bizj.us/view/img/11870412/thredup*800xx1184-667-67-0.jpg"
         alt="Second slide"
       />

       <Carousel.Caption className="disapear-width">
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item style={{ height: CarouselItemHeight }}>
       <img
         className="d-block w-100"
         src="https://media.bizj.us/view/img/11870412/thredup*800xx1184-667-67-0.jpg"
         alt="Third slide"
       />

       <Carousel.Caption className="disapear-width">
         <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
 );
}

export default CarouselComponent;