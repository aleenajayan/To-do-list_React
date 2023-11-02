import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div className="Nav">
      <div className="logo">
        <h1>My To-do</h1>
      </div>
      <div className="profile">
        <a href="#tosecondpg">To-do List</a>
        <img src="./icon-profile.png" alt="icon" />
      </div>
    </div>
  );
}

export default Nav
