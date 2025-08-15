import { fetchData } from './strapi';

const getAllPortfolio = async (query = '') => {
   return await fetchData(`portfolio?populate=*`);
};

export { getAllPortfolio };
