import React from 'react'
import {Link} from 'react-router-dom'
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />

        <div className='navBarItems'>
            <Link to="/tvshows" >TvShows</Link>
            <Link to="/movies" >Movies</Link>
            <Link to="/recentlyadded" >Recently Added</Link>
            <Link to="/mylist" >MyList</Link>
        </div>
        <LuSearch />
    </div>
  )
}

export default Header