import './Navbar.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';

const Navbar =()=>{
  const location = useLocation(); 

  
  const getNavbarStyle = () => {
    switch (location.pathname) {
      case '/about':
        return 'navbar navbar-about';
      case '/event':
        return 'navbar navbar-event';
      case '/talent':
        return 'navbar navbar-talent';
      case '/contact':
        return 'navbar navbar-contact';
      default:
        return 'navbar navbar-default'; 
    }
  };
  return (
    <>
     
    
      <div className={getNavbarStyle()}>
        <div className='logo'> <h3 className='white'>The</h3> <h2 className='gold'>Next Gen</h2> <h1 className='red'>SHOW</h1> </div>
      <nav className='links'>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About Us</Link> </li>
        <li> <Link to="/event">Events</Link> </li>
        <li>  <Link to="/talent">Talents</Link> </li>
        <li> <Link to="/contact">Contact</Link> </li>
     </nav>
     <Button variant="outline-light" className='button'>Join Us</Button>
     
    </div>
   
 </>
  )
}

export default Navbar;