import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/header.css"
import { Nav } from 'reactstrap'

const header = () => {

  
  return (
    <>
    <header>
    <Nav className="justify-content-center" >
      <div className="x">
        <NavLink to="/" className="y" style={{color:"white"}} > Anasayfa</NavLink>
      </div >
      <div className="x">
        <NavLink to="/blogs" className="y" >Hakkımda</NavLink>
      </div>
      <div className="x">
        <NavLink to="/contact" className="y" >İletişim</NavLink>
      </div>
      
    </Nav>
   
   </header>
  </>
  );
};

export default header;
