import ProductItem from "./ProductItem";

export default function Products(props) {
  return (
    <div className="products-grid">
      {props.products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.cost}
          img={product.photo}
          addToCart={props.addToCart}
        />
      ))}
    </div>
  );
}
