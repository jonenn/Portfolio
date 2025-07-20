import { fetchData } from "@/api/strapi";

const getHero = async () => {
   return await fetchData("hero");
};

export { getHero };
