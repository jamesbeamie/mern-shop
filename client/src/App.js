import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Shopping from "./components/ShoppinList";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Shopping />
    </div>
  );
}

export default App;
