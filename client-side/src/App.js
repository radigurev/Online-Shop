import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Navigation from "./Components/Nav/Nav";
import Body from "./Components/Body/Body";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [message, setMessage] = useState("");

let headers = new Headers();

headers.append("Access-Control-Allow-Origin", "*")
headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

  // useEffect(() => {
  //   fetch("https://request.rado-development.eu/users")
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message));
  // },[]);

  return (
    <div>
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
