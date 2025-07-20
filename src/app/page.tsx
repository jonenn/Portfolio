"use client";

import { Hero } from "@/components/common/Hero";
import { TechStack } from "@/components/common/TechStack";
import { useEffect, useState } from "react";
import { getHome } from "@/api/home";
import { Loader } from "@/components/common/Loader";

export default function Home() {
   const [home, setHome] = useState();
   const [loading, setLoading] = useState<boolean>(true);
   useEffect(() => {
      const getAllHome = async () => {
         try {
            const data = await getHome();
            // setTimeout(async () => {
            setHome(data);
            setLoading(false);
            console.log(home);
            // }, 4000);
         } catch (err) {
            console.error(err);
            setLoading(false);
         }
      };

      getAllHome();
   }, []);
   return loading ? (
      <Loader />
   ) : (
      <main>
         <Hero />
         <TechStack />
      </main>
   );
}
