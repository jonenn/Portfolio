import React from "react";
import "./Navbar.scss";
import Image from "next/image";
import Linkedin from "@/assets/Linkedin.svg";
import Github from "@/assets/Github.svg";
import Link from "next/link";

type navItemTypes = {
   label: string;
   path: string;
};

type navMenuTypes = navItemTypes[];

const Navbar = () => {
   const navMenu: navMenuTypes = [
      {
         label: "Home",
         path: "/",
      },
      {
         label: "Portfolio",
         path: "/portfolio",
      },
      {
         label: "About",
         path: "/about",
      },
   ];

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
               {navMenu.map((item, index) => (
                  <li key={index} className="navbar__item">
                     <Link href={item.path}>{item?.label}</Link>
                  </li>
               ))}
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
