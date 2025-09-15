'use client';

import Image from 'next/image';
import './Hero.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface heroData {
   title: string;
   description: string;
   image: string;
   buttonUrl1: string;
   buttonUrl2: string;
   buttonText1: string;
   buttonText2: string;
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
                  <Link href={hero?.buttonUrl1}>
                     <button
                        className="hero__button hero__button--primary"
                        button-text={hero?.buttonText1}
                     >
                        <span className="shine"></span>
                     </button>
                  </Link>
                  <Link href={hero?.buttonUrl2}>
                     <button className="hero__button hero__button--secondary">
                        {hero?.buttonText1}
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      )
   );
};
