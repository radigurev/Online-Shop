import React from "react";

import "./AdminModal.css";

import Navigation from "../ModalNavigation/ModalNavigation";
import NavigationModal from "./NavigationList/NavigationList";
const AdminModal = () => {

    return (
      <div>
        <Navigation />
        <div id="modalContent">
          
          <NavigationModal />
        </div>
      </div>
    );
};

export default AdminModal;