import "./styles/Product.css";
import { getDatabase, ref, remove } from "firebase/database";
import { useState } from "react";
import { formatProductName } from "../utils/Utils";

function CartItem(props) {
  const [deleteItems, setDeleteItems] = useState(false);

  const removeSpecificItem = async (uniqueKey) => {
    const formattedKey = formatProductName(uniqueKey);
    const db = await getDatabase();
    const dbRef = ref(db, "Products/" + formattedKey);

    remove(dbRef)
      .then(() => {
        console.log("Item deleted successfully");
        setDeleteItems((prevFlag) => !prevFlag);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Delete failed:", error.message);
      });
  };

  return (
    <div className="cart-item-container">
      <img
        className="cart-item-img"
        src={props.item.img}
        alt={props.item.title}
      />
      <h3 className="cart-item-desc">{props.item.title}</h3>
      <h2 className="cart-item-cost">${props.item.price}</h2>
      <button
        className="btn btn-danger remove-from-cart"
        onClick={() => removeSpecificItem(props.item.title)}
      >
        X
      </button>
    </div>
  );
}

export default CartItem;
