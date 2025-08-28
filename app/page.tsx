'use client';

import { Hero } from '@/components/common/Hero';
import { TechStack } from '@/components/common/TechStack';
import { useEffect, useState } from 'react';
import { getAllHome } from '@/api/home';
import { Loader } from '@/components/common/Loader';

export default function Home() {
   const [home, setHome] = useState();
   const [loading, setLoading] = useState<boolean>(true);
   useEffect(() => {
      const setAllHome = async () => {
         try {
            const data = await getAllHome();
            // setTimeout(async () => {
            setHome(data.data);
            setLoading(false);
            console.log(home);
            // }, 4000);
         } catch (err) {
            console.error(err);
            setLoading(false);
         }
      };

      setAllHome();
   }, []);
   return loading ? (
      <Loader />
   ) : (
      home && (
         <main>
            <Hero allHome={home} />
            <TechStack allHome={home} />
         </main>
      )
   );
}
