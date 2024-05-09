import { Pizza } from "../models/pizza.model";

type Props = Pizza & {
  handleChangePerson: (data: Pizza) => void;
};

const ItemPizza = ({ name, category, handleChangePerson }: Props) => {
  return (
    <div>
      <div>{name}</div>
      <div>{category}</div>
      <button
        onClick={() =>
          handleChangePerson({ name: "DungDev 2023", category: "DevVuive" })
        }
      >
        Change Person
      </button>
    </div>
  );
};

export default ItemPizza;
