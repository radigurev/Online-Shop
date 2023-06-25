import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Navigation from "./Components/Nav/Nav"

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
    </div>
  );
}

export default App;
