'use client';

import { getAllPortfolio } from '@/api/portfolio';
import { Loader } from '@/components/common/Loader';
import { Project } from '@/components/common/Project';
import React, { useEffect, useState } from 'react';

type ProjectTypes = {
   id: number;
   year: string;
   screenshot: string;
   title: string;
   description: string;
   deploymentLink: string;
   designLink: string;
   label1: string;
   label2: string;
};

type PortfolioTypes = {
   title: string;
   project: ProjectTypes[];
};

const Portfolio = () => {
   const [portfolio, setPortfolio] = useState<PortfolioTypes>();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const setAllPortfolio = async () => {
         try {
            const data = await getAllPortfolio();
            setPortfolio(data.data);
            console.log(data.data);
            setLoading(false);
         } catch (err) {
            console.error(err);
            setLoading(false);
         }
      };
      setAllPortfolio();
   }, []);

   return loading ? (
      <Loader />
   ) : (
      portfolio && (
         <main>
            <h2 className="portfolio__title">{portfolio?.title}</h2>
            {portfolio.project.map((item) => (
               <Project key={item.id} project={item} />
            ))}
         </main>
      )
   );
};

export default Portfolio;
