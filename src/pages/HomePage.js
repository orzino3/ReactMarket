import React, { useState, useEffect } from "react";
import "../components/styles/ApiManager.css";
import Products from "../components/Products";
import Sorter from "../components/Sorter";

function HomePage({ addToCart }) {
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const formatProductsList = data.map((product) => ({
          name: product.title,
          cost: product.price,
          photo: product.image,
        }));
        setProductsList(formatProductsList);
        setFilteredProducts(formatProductsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-page-container">
      <h1>Products List</h1>
      <div className="sorter-wrapper">
        {!loading ? (
          <Sorter
            products={productsList}
            setFilteredProducts={setFilteredProducts}
          />
        ) : (
          <p className="loading-container"></p>
        )}
      </div>
      <Products products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}

export default HomePage;
