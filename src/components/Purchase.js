import { useState } from "react";
import "./styles/Purchase.css";
import database from "./FirebaseDB";
import { ref, set } from "firebase/database";
import { sanitizeProductName, hashString } from "../utils/Utils";

function Purchase(props) {
  const addToCart = (event) => {
    const productObject = {
      img: props.product.img,
      title: props.product.name,
      price: props.product.price,
    };

    const uniqueKey = productObject.title;
    const sanitizedUniqueKey = sanitizeProductName(uniqueKey);

    set(ref(database, "Products/" + sanitizedUniqueKey), productObject)
      .then(() => {
        console.log("Data sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="purchase-control">
      <button className="add-to-cart btn btn-warning" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Purchase;
