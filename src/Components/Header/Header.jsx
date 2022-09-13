import React, { useEffect, useState } from 'react'
import logo from "../../logo.png"
import "../Home/Home.scss";
import {Link} from 'react-router-dom';
import {BsSearch} from "react-icons/bs";



const Header = () => {
    

  return (
    <>
       <nav className='header'>

        <img src={logo} alt="logo" />

       

         <div>
         <Link to="/tvshows" > TV Shows</Link>
          <Link to="/tvshows"> Movies</Link>
          <Link to="/tvshows"> Recently Added</Link>
          <Link to="/tvshows"> My List</Link>
         </div>
         

          <BsSearch/>
          

       </nav>
        
    </>
  )
}

export default Header
