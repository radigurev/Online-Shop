import React, { useState, useEffect } from "react";

import './Modal.css';

import AdminContent from "./ModalContent/AdminContent/AdminModal";
import ProfileContent from "./ModalContent/UserContent/ProfileModal";

const Modal = (props) => {


  // }, [props.modalType]);
  
const DisplayContent = () => {
  switch(props.modalType) {
    case 'admin': 
    return <AdminContent />
    case 'profile':
      return <ProfileContent />
  }
}

    return (
      <div>
        <div
          id="deactivate-background"
          className="deactivate-background hidden"
        ></div>
        <div id="mainModal" className="currentModal hidden">
          <div id="modalHeader" className=" background-color">
            <div className="d-flex flex-row-reverse fa-lg">
              {/* <FontAwesomeIcon icon="check-square" /> */}
              <button onClick={props.CloseModal} className="navbar-brand">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          {DisplayContent()}
        </div>
      </div>
    );
}

export default Modal;