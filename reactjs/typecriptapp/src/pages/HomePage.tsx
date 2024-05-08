import { useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/pizza.model";
// import ItemPizza from "../sections/ItemPizza";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    { id: 1, title: "Pizza Thịt", description: "Pizza Thơm Ngon Tuyệt vời" },
    { id: 2, title: "Pizza Xúc Xích", description: "Xúc Xích Đức" },
  ]);

  const handleRemovePizza = (id: number) => {
    const indexPizza = pizzas.findIndex((e) => e.id === id);
    console.log(indexPizza);
    let newPizza = [...pizzas];
    newPizza.splice(indexPizza, 1);
    setPizzas(newPizza);
  };
  return (
    <>
    {console.log('Render Item')}
      <div
        style={{
          height: "calc(100vh - 309px)",
          padding: "4rem 4rem",
          overflowY: "auto",
        }}
      >
        <div className="wrapper-card-items">
          {pizzas.map((item) => (
            <CardPizza
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              handleRemovePizza={handleRemovePizza}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
