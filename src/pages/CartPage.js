import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import "../components/styles/Product.css";
import "../components/styles/CartPage.css";
import { ref, get, getDatabase, remove } from "firebase/database";
import database from "../components/FirebaseDB";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [deleteItems, setDeleteItems] = useState(false);

  const fetchDataFromFirebase = async () => {
    try {
      const dbRef = ref(database, "Products");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const cartItems = Object.values(data);
        setCartItems(cartItems);
        let total = 0;
        cartItems.forEach((item) => {
          total += parseFloat(item.price);
        });
        setCartTotal(total);
        console.log("Data fetched successfully:", cartItems);
      } else {
        console.log("No data available.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromFirebase();
  }, [deleteItems]);

  const deleteItemsInCart = async () => {
    const db = await getDatabase();
    const dbRef = ref(db, "Products");

    remove(dbRef)
      .then(() => {
        console.log("Delete successful");
        setDeleteItems((prevFlag) => !prevFlag);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Delete failed:", error.message);
      });
  };

  return (
    <div className="cart-page-container">
      <div className="cart-info-container">
        <p className="cart-title">Your Cart:</p>
        <p className="cart-total">
          Total price is:{" "}
          <span className="to-pay">${cartTotal.toFixed(2)}</span>
        </p>
        <p className="total-items">Total items in cart: {cartItems.length}</p>
        <button
          className="delete-cart-items btn btn-danger"
          onClick={deleteItemsInCart}
        >
          <i class="fa-solid fa-trash-can">Reset Cart</i>
        </button>
      </div>
      <div className="items-container">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
