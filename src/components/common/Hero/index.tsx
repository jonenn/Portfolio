import Image from "next/image";
import "./Hero.scss";

export const Hero = () => {
   return (
      <main>
         <div className="hero__container container">
            <div className="hero__container--left">
               <Image
                  src="https://res.cloudinary.com/dedihqcsy/image/upload/v1752903606/hero.16da25d7_2_xkyuli.png"
                  alt="Hero image"
                  width={503}
                  height={419}
               />
            </div>
            <div className="hero__container--right">
               <h1 className="hero__title">
                  I’m Jonenn, a problem-solving developer with a designer’s eye
               </h1>
               <p className="hero__content">
                  I am a full-stack JavaScript developer and build user-centered
                  web apps that balance performance, usability, and visual
                  polish with the advantages of both worlds.
               </p>
            </div>
         </div>
      </main>
   );
};
