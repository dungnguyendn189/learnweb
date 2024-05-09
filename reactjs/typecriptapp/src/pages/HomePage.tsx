import { useEffect, useMemo, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/pizza.model";
import { count } from "console";
import CountPizza from "../sections/CountPizza";
import ButtonField from "../components/ButtonField";
import TextField from "../components/TextField";
// import ItemPizza from "../sections/ItemPizza";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    fetch(
      "https://private-anon-2cc1f6fd1f-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank"
    )
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  const [count, setCount] = useState(0);
  const [isCount, setIsCount] = useState(false);

  const handleRemovePizza = (id: number) => {
    const indexPizza = pizzas.findIndex((e) => e.id === id);
    let newPizza = [...pizzas];
    newPizza.splice(indexPizza, 1);
    setPizzas(newPizza);
  };
  const tinhTong = useMemo(() => {
    return count + 1;
  }, []);
  return (
    <>
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
              name={item.name}
              category={item.category}
              price={item.price}
              handleRemovePizza={handleRemovePizza}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ButtonField>Show More</ButtonField>
        </div>
        {tinhTong}
        <button onClick={() => setCount(count + 1)}>Incre</button>
      </div>
    </>
  );
};

export default HomePage;
