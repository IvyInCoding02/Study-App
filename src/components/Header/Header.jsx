import React from 'react';
import './Header.css';

const Header = (props) => {
   console.log(props)
 return(
   <header>
      <div className="container">
         <div className="header">
            <a className= "header-logo" href= "#" >{props.logo}</a>
            <nav>
               <ul className = "header-nav">
                  <li>About Us</li>
                  <li>Price</li>
                  <li>History</li>
                  <li>Account</li>
               </ul>
            </nav>
         </div>
      </div>
   </header>
 )
}

export default Header;