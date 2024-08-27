import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
export interface IData {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ProductList = () => {
  const [data, setData] = useState<IData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCTS_PER_PAGE = 8;
  const countBtn = Math.ceil((data.length + 1) / PRODUCTS_PER_PAGE);
  const indexOfFirst = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const indexOfLast =
    data.length > currentPage * PRODUCTS_PER_PAGE
      ? currentPage * PRODUCTS_PER_PAGE
      : data.length;

  const createBtns = (countBtn: number) => {
    let result = [];
    for (let i = 0; i < countBtn; i++) {
      let btn = <button onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>;
      result.push(btn);
    }
    return result;
  };
  useEffect(() => {
    const fetchData = async (url: string) => {
      const request = await fetch(url);
      const result = await request.json();
      setData(result);
    };
    fetchData("https://fakestoreapi.com/products");
  }, []);

  return (
    <div>
      {!!(data.length > 0) &&
        data
          .slice(indexOfFirst, indexOfLast)
          .map((item) => <ItemCard itemData={item} key={item.id} />)}
      <div className="pagination-container">{createBtns(countBtn)}</div>
    </div>
  );
};

export default ProductList;
