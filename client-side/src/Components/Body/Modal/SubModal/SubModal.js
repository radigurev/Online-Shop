import React, { useState, useEffect } from "react";

import './SubModal.css';


const Modal = (props) => {

    const [height,SetHeight] = useState(0);
    const [width,SetWidth] = useState(0);

    useEffect(() => {
        if(props.height.includes('px') || props.height.includes('%') || props.height.includes('vh'))
        SetHeight(props.height);
        else
        SetHeight(props.height+'vh');

        if(props.width.includes('px') || props.width.includes('%') || props.width.includes('vh'))
        SetWidth(props.width);
        else
        SetHeight(props.width+'vw');

    });

    return (
      <div>
        <div
          id="sub-deactivate-background"
          className="deactivate-background hidden bigIndex"
        ></div>
        <div style={{height: height, width: width}} id="subMainModal" className="subCurrentModal hidden">
          <div id="subModalHeader" className=" background-color">
            <div className="d-flex flex-row-reverse fa-lg">
              {/* <FontAwesomeIcon icon="check-square" /> */}
              <button onClick={props.CloseModal} className="navbar-brand">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    );
}

export default Modal;