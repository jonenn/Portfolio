import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
   return (
      <nav className="navbar">
         <div className="navbar__menu">
            <ul className="navbar__list">
               <li className="navbar__item">Home</li>
               <li className="navbar__item">Portfolio</li>
               <li className="navbar__item">About</li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
