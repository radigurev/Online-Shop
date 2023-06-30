import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Navigation from "./Components/Nav/Nav";
import Body from "./Components/Body/Body";
import 'font-awesome/css/font-awesome.min.css';

function App() {


  // useEffect(() => {
  //   fetch("https://request.rado-development.eu/users")
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message));
  // },[]);

const [openModal,SetOpenModal] = useState(false);


const OpenModal = () => {
  console.log(openModal);
  SetOpenModal(!openModal);

}

  return (
    <div>
      <Navigation OpenModal={() => OpenModal()} />
      <br/>
      <br/>
      <br/>

      <Body openModal={openModal} />
    </div>
  );
}

export default App;
