import React from 'react'
import {Link} from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');
    const sidebarMenu = document.getElementById('sidebarMenu');

    if (menu && sidebarMenu) {
        menu.addEventListener('click', function() {
            // Toggle the 'open' class to show/hide the sidebar menu
            sidebarMenu.classList.toggle('open');
        });
    }
});



  return (
    <div className='header'>
      <div className='menu' > <GiHamburgerMenu /> </div>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />

        <div className='navBarItems'>
            <Link to="/" >TV Shows</Link>
            <Link to="/" >Movies</Link>
            <Link to="/" >Recently Added</Link>
            <Link to="/" >My List</Link>
        </div>
        <LuSearch />
    </div>
  )
}

export default Header