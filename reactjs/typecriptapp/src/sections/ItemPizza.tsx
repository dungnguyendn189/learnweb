import { Pizza } from "../models/pizza.model";

type Props = Pizza & {
  handleChangePerson: (data: Pizza) => void;
};

const ItemPizza = ({ title, description, handleChangePerson }: Props) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <button
        onClick={() =>
          handleChangePerson({ title: "DungDev 2023", description: "DevVuive" })
        }
      >
        Change Person
      </button>
    </div>
  );
};

export default ItemPizza;
