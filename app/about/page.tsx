const About = async () => {
   type todoProps = {
      id: number;
      title: string;
   };

   let generalData: [] = [];
   try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await res.json();
      console.log(data);
      generalData = data;
   } catch (err) {
      console.error(err);
   }

   return (
      <p>
         {generalData.map((todo: todoProps) => (
            <div key={todo.id}>{todo.title}</div>
         ))}
      </p>
   );
};

export default About;
