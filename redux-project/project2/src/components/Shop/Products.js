import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  {
    id: "p1",
    price: 6,
    title: "My book",
    description: "My fav book",
  },
  {
    id: "p2",
    price: 6,
    title: "My 2nd book",
    description: "My fav book",
  },
  {
    id: "p3",
    price: 7,
    title: "My 3rd book",
    description: "My fav book",
  },
  {
    id: "p4",
    price: 6,
    title: "My 4th book",
    description: "My fav book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
