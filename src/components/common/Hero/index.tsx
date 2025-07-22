"use client";

import Image from "next/image";
import "./Hero.scss";
import { useEffect, useState } from "react";

interface heroData {
   title: string;
   description: string;
   image: string;
}

interface heroProps {
   allHome: {
      hero: heroData;
   };
}

export const Hero = ({ allHome }: heroProps) => {
   const [hero, setHero] = useState<heroData | null>();

   useEffect(() => {
      setHero(allHome.hero);
   }, []);
   return (
      hero && (
         <div className="hero__container container">
            <div className="hero__container--left">
               <Image
                  src={hero?.image}
                  alt="Hero image"
                  width={503}
                  height={419}
               />
            </div>
            <div className="hero__container--right">
               <h1 className="hero__title">{hero?.title}</h1>
               <p className="hero__content">{hero?.description}</p>
               <div className="hero__buttons">
                  <button
                     className="hero__button hero__button--primary"
                     button-text="Portfolio"
                  >
                     <span className="shine"></span>
                  </button>
                  <button className="hero__button hero__button--secondary">
                     Contact
                  </button>
               </div>
            </div>
         </div>
      )
   );
};
