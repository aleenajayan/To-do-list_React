import React, { useState } from 'react'
import './date.css'
import Calendar from "react-calendar";


function Date() {

  return (
    <div className='weather-container'>
      <h1></h1>
      <div className="calendar-container">
        
      </div>
    </div>
  );
}

export default Date


 /* const [date,setDate]=useState(new Date());

  const onChange=date=>{
    setDate(date);
  };
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
function MyApp() {
  const [value, onChange] = useState<Value>(new Date());}
  return (<div>
    <Calendar onChange={onChange} value={value} />
    </div>
  );*/