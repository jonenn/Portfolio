import { fetchData } from "@/api/strapi";

const getHome = async (query = "") => {
   return await fetchData(`home${query}`);
};

const getAllHome = async () => {
   return await getHome(
      `?populate[hero]=*&populate[techlist][populate][tech]=*`
   );
};

const getHero = async () => {
   return await getHome("?populate=hero");
};

const getStack = async () => {
   return await getHome("?populate[techlist][populate]=*");
};

export { getHome, getAllHome, getHero, getStack };
