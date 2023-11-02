import React, { useState , useEffect } from "react";
import "./app.css";
import { Nav, Date, Category, Quote, Todo, Time, PTodo } from "./Components";

function App() {
  const [t,setT]=useState(false);
  console.log(t);
  const changeT=()=>{
   setT(true);
  }
  const changeF=()=>{
    setT(false);
  }
  useEffect(() => {
    console.log(t); // This will log the updated state value
  }, [t]); // Specify t as a dependency for useEffect

  // ...

  return (
    <div className="main">
      {/*--------------------------------------------------------------*/}
      <div className="firstpage">
        <Nav />
        <div className="firstpage-firsthalf">
          <div className="hii">
            <h1>
              Hii  <br /> What's Up?
            </h1>
          </div>

          <div className="Quote">
            <Quote />
          </div>
        </div>
        {/* *************************************************************** */}
        <div className="firstpage-secondhalf">
          <div className="Category"></div>

          <div className="time">
            <Time />
          </div>

          <div className="Date">
            <Date />
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------*/}
      <div className="secondpage">
        <div className="secondpage-firsthalf">
          {t == true ? <Todo /> : <PTodo />}
        </div>
        {/* *************************************************************** */}
        <div className="secondpage-secondhalf">
          <div className="category">
            <Category changeT={changeT} changeF={changeF} t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
