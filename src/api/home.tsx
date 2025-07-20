import { fetchData } from "@/api/strapi";

const getHome = async (query = "") => {
   return await fetchData(`home${query}`);
};

const getHero = async () => {
   const data = await getHome("?populate=hero");
   console.log(data);
   return data;
};

const getStack = async () => {
   return await fetchData("?populate=tech");
};

export { getHome, getHero, getStack };
