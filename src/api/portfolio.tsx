import { fetchData } from './strapi';

const getAllPortfolio = async () => {
   return await fetchData(`portfolio?populate=*`);
};

export { getAllPortfolio };
