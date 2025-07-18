import React from "react";
import "./Navbar.scss";
import Image from "next/image";
import Linkedin from "@/assets/Linkedin.svg";
import Github from "@/assets/Github.svg";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbar__menu container">
            <ul className="navbar__list">
               <li className="navbar__item">
                  <Image
                     src={Linkedin}
                     alt="Linkedin Profile"
                     width={24}
                     height={24}
                  />
               </li>
            </ul>
            <ul className="navbar__list navbar__list--items">
               <li className="navbar__item">
                  <Image
                     src="https://res.cloudinary.com/dedihqcsy/image/upload/v1752815474/Jonenn_xo0ndy.gif"
                     alt="Jonenn's logo"
                     width={42}
                     height={42}
                  />
               </li>
               <li className="navbar__item">Home</li>
               <li className="navbar__item">Portfolio</li>
               <li className="navbar__item">About</li>
            </ul>
            <ul className="navbar__list">
               <li className="navbar__item">
                  <Image
                     src={Github}
                     alt="Linkedin Profile"
                     width={24}
                     height={24}
                  />
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
