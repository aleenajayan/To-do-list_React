import { useState } from "react";
import React from 'react'
import './time.css'


function Time() {
    let time = new Date().toLocaleTimeString();
    const[currentTime,setCurrentTime]=useState(time);

    const updateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime,1000);
  return (
    <div className="clk">
      <h1>{currentTime}</h1>
    </div>
  )
}

export default Time
