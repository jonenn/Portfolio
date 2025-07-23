import { fetchData } from './strapi';

const getPortfolio = async (query = '') => {
   return await fetchData(`portfolio${query}`);
};

export { getPortfolio };
