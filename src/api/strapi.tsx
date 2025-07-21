const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const fetchData = async (path: string) => {
   try {
      const res = await fetch(`${API_URL}/api/${path}`);
      const data = await res.json();
      return data;
   } catch (err) {
      console.error(err);
   }
};

export { fetchData };
