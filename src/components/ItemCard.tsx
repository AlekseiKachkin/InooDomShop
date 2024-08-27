import { IData } from "./ProductList";

interface ICardProps {
  itemData: IData;
}

const ItemCard = ({ itemData }: ICardProps) => {
  return <div>ItemCard</div>;
};

export default ItemCard;
