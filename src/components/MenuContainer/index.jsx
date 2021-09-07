import Product from "../Product";
const MenuContainer = ({ products, handleClick }) => {
  return (
    <>
      {products.map((item, index) => (
        <Product key={index} item={item} handleClick={handleClick}></Product>
      ))}
    </>
  );
};

export default MenuContainer;
