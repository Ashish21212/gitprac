import React from 'react'
import './Navbar.css'
import  { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
     <div className="nav_logo">
     
     </div>
<div className="nav_menu">
  <NavLink to='/' style={{textDecoration:'none',fontSize:'1.6rem',color:'#1E0342'}}  ><h2>KHAN<span className='pin'>PIN</span></h2></NavLink> 
   
</div>
<div className="login_signup">
<NavLink to='/login'><button>Login</button></NavLink>
<NavLink to='/signup'><button>Signup</button></NavLink>



</div>
      </div>
      
    </>

  )
}

export default Navbar
