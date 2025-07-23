'use client';

import { Loader } from '@/components/common/Loader';
import { Project } from '@/components/common/Project';
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
   const [loading, setLoading] = useState(false);

   // useEffect(()=>{

   // },[])

   return loading ? (
      <Loader />
   ) : (
      <main>
         <h2 className="portfolio__title">title</h2>
         <Project />
      </main>
   );
};

export default Portfolio;
