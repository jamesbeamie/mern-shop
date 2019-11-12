import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import NavBar from "./components/Navbar";
import Shopping from "./components/ShoppinList";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <NavBar />
        <Shopping />
      </div>
    </Provider>
  );
}

export default App;
