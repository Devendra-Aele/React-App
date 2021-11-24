import "./App.css";
import Navbar from "./componenet/Navbar";
import Textform from "./componenet/Textform";
import About from "./componenet/About";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   link
// } from "react-router-dom";


function App() {
  const [newmode, setnewmode] = useState("light");
  const [textmode, settextmode] = useState("Dark mode Enable");
  // const Onmode = () => {
  //   if (newmode == "dark") {
  //     setnewmode("light");
  //     settextmode("Dark mode Enable");
  //     document.body.style.color = "black";
  //     document.body.style.backgroundColor = "white";
  //   } else {
  //     setnewmode("dark");
  //     settextmode("Light mode Enable");
  //     document.body.style.color = "white";
  //     document.body.style.backgroundColor = "black";
  //     setInterval(() => {
  //       document.title = "Text Form";
  //     }, 2500);
  //     setInterval(() => {
  //       document.title = " Besice Project";
  //     }, 1500);
  //   }
  // };

  const Onmode=(cls)=>{
    removecls();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (newmode == "dark") {
          setnewmode("light");
          // settextmode("Dark mode Enable");
          document.body.style.color = "black";
          document.body.style.backgroundColor = "white";
        } else {
          setnewmode("dark");
          // settextmode("Light mode Enable");
          document.body.style.color = "white";
          document.body.style.backgroundColor = "black";
        }
  }
  const removecls=()=>{
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-primary")
      }
  return (
    <>
     {/* <Router> */}
      <Navbar
        home="Home"
        about="About"
        newmode={newmode}
        Onmode={Onmode}
        textmode={textmode}
      />
      <div className="container">
      <Textform heading="Enter Your Text" />
      <About/>
      {/* <Switch>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/">
            <Textform heading="Enter Your Text" />
        </Route>
      </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
