import Purchase from "./Purchase";

function ProductItem(props) {
  return (
    <div className="product-card">
      <img className="image-container" src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>${props.price}</p>
      <Purchase product={props} />
    </div>
  );
}

export default ProductItem;
