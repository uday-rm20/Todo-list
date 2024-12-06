import React from 'react';
import './Header.css'; 

function Header() {
    return (
      <header className="header">
        <img
          src=".\src\Utils\todo.png" 
          alt="Header Logo"
          className="header-image"
        />
        <h1 className="header-title">My To-Do List</h1>
      </header>
    );
  }
  
  export default Header;
  