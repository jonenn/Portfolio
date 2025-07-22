"use client";

import { useEffect, useState } from "react";
import "./TechStack.scss";
import Image from "next/image";

interface techTypes {
   id: number;
   icon: string;
   iconsm: string;
   name: string;
}

interface stackData {
   title: string;
   tech: techTypes[];
}

interface stackProps {
   allHome: {
      techlist: stackData;
   };
}

export const TechStack = ({ allHome }: stackProps) => {
   const [stack, setStack] = useState<stackData | null>();
   console.log(allHome);
   useEffect(() => {
      setStack(allHome.techlist);
   }, []);
   return (
      <div className="techstack__container">
         <h3 className="techstack__title">{stack?.title}</h3>
         <div className="techstack__block">
            {[...(stack?.tech || []), ...(stack?.tech || [])].map(
               (item, index) => (
                  <div className="techstack__shadow" key={index}>
                     <div className="techstack__images">
                        <Image
                           className="techstack__image"
                           src={item?.icon}
                           alt={item.name}
                           width={50}
                           height={50}
                        />
                     </div>
                     <div className="techstack__name">{item?.name}</div>
                  </div>
               )
            )}
         </div>
      </div>
   );
};
