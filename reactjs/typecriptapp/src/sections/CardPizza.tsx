import LogoPizza from "../assets/pizza.png";
import { Pizza } from "../models/pizza.model";

type Props = Pizza & {
  handleRemovePizza: (id: number) => void;
};

const CardPizza = ({
  id,
  name,
  category,
  handleRemovePizza,
  topping,
  price,
}: Props) => {
  return (
    <div className="card-items" onClick={() => handleRemovePizza(id!)}>
      <img className="card-image-pizza" src={LogoPizza} alt="" />
      <div style={{ height: "50%", width: "100%" }}></div>
      <div className="card-content">
        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#fff",
              marginTop: "10px",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#fff",
              marginTop: "10px",
            }}
          >
            {category}, {price}
          </div>
          <div>{topping}</div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
