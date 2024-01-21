import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import './Navbar.css';

const Navbar = () => {


   useEffect(() => {}, [])
   return (
      <nav>
         <Link to="/Home">
            {'Home'}
         </Link>
         <Link to="/">
            {'About'}
         </Link>
      </nav>
   )
}

export default Navbar