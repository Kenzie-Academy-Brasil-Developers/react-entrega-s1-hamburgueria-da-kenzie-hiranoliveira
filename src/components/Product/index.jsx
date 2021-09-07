import "./style.css";
const Product = ({ item, handleClick }) => {
  return (
    <>
      <div className="div">
        <ul>
          <li>{item.name}</li>
          <br />
          <li>Categoria: {item.category}</li>
          <br />
          <li>Valor: {item.price}</li>
          <br />
          <button className="searchButton" onClick={() => handleClick(item.id)}>
            Adicionar ao Carrinho
          </button>
        </ul>
      </div>
    </>
  );
};

export default Product;
