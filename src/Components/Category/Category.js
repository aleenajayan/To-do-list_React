import React from 'react'
import './category.css'


function Category(props) {
  const { changeT , changeF , t} = props;

  const firstBoxStyle = {
    backgroundColor:t == true ? "rgba(220, 230, 255, .2)" : "",
    border: t == true ? "2px solid blue" : "", 
  };

  const secondBoxStyle = {
    backgroundColor: t == false ? "rgba(220, 230, 255, .2)" : "",
    border: t == false ? "2px solid blue" : "",
  };
  return (
    <div className="Cat" id="tosecondpg">
      <h1 className="Catheading">Categories..</h1>
      <div className="boxex">
        <div className="firstbox" onClick={changeT} style={firstBoxStyle}>
          <h1>Professional </h1>
        </div>

        <div className="secondbox" onClick={changeF} style={secondBoxStyle}>
          <h1>Personal</h1>
        </div>
      </div>
    </div>
  );
}

export default Category
