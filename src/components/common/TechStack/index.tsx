"use client";

import { useEffect, useState } from "react";
import "./TechStack.scss";
import { getStack } from "@/api/home";
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

export const TechStack = () => {
   const [stack, setStack] = useState<stackData | null>();

   useEffect(() => {
      const getAllStack = async () => {
         try {
            const data = await getStack();
            setStack(data.data);
            console.log(data.data);
         } catch (err) {
            console.error(err);
         }
      };

      getAllStack();
   }, []);
   return (
      <div className="techstack__container">
         <h3 className="techstack__title">{stack?.title}</h3>
         <div className="techstack__block">
            {stack?.tech?.map((item) => (
               <div className="techstack__shadow" key={item.id}>
                  <Image
                     className="techstack__image"
                     src={item?.icon}
                     alt={item.name}
                     width={50}
                     height={50}
                  />
                  <div className="techstack__name">{item?.name}</div>
               </div>
            ))}
         </div>
      </div>
   );
};
