import { useState, useEffect } from "react";
import "./styles/Sorter.css";

export default function Sorter({ products, setFilteredProducts }) {
  const [selectedPrice, setSelectedPrice] = useState(0);

  const minPrice = products.length
    ? Math.min(...products.map((product) => product.cost))
    : 0;
  const maxPrice = products.length
    ? Math.max(...products.map((product) => product.cost))
    : 0;

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.cost <= selectedPrice
    );
    setFilteredProducts(filtered);
  }, [selectedPrice, products, setFilteredProducts]);

  useEffect(() => {
    setSelectedPrice(maxPrice);
  }, [maxPrice]);

  return (
    <div className="sorter-container">
      <span className="lowest-price">${minPrice}</span>
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
      />
      <span className="highest-price">${maxPrice}</span>
      <p>Selected Price: ${selectedPrice}</p>
    </div>
  );
}
