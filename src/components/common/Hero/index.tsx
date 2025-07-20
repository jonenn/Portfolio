"use client";

import Image from "next/image";
import "./Hero.scss";
import { getHero } from "@/api/home";
import { useEffect, useState } from "react";

interface heroData {
   title: string;
   content: string;
   image: string;
}

export const Hero = () => {
   const [hero, setHero] = useState<heroData | null>();

   useEffect(() => {
      const getAllHeroes = async () => {
         try {
            const allHeroes = await getHero();
            setHero(allHeroes.data.hero);
            console.log(allHeroes.data.hero);
         } catch (err) {
            console.error("Failed to fetch hero data:", err);
         }
      };

      getAllHeroes();
   }, []);
   return (
      hero && (
         <main>
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
                  <p className="hero__content">{hero?.content}</p>
               </div>
            </div>
         </main>
      )
   );
};
