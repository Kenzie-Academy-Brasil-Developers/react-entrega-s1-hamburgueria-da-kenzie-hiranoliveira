import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const allProducts = [
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ];

  let [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const showProducts = (word) => {
    filteredProducts = products.filter(
      (item) => item.name.toLowerCase() === word.toLowerCase()
    );
    setFilteredProducts(filteredProducts);
    return filteredProducts.length === 0
      ? alert("Nenhum item corresponde à sua pesquisa")
      : setProducts(filteredProducts);
  };

  const handleClick = (productId) => {
    const findItem = products.find((item) => item.id === productId);

    const searchDuplicated = currentSale.some((item) => item.id === productId);

    return searchDuplicated ? "" : setCurrentSale([...currentSale, findItem]);
  };

  const handleClickRemoveItem = (productId) => {
    const keptElements = currentSale.filter((item) => item.id !== productId);

    setCurrentSale(keptElements);
  };
  return (
    <div className="App">
      <header>KENZIE GRILL</header>
      <div className="divInput">
        <input
          placeholder="Digite aqui o que procura"
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        ></input>
        <button
          className="searchButton"
          onClick={() => (searchInput !== "" ? showProducts(searchInput) : "")}
        >
          Pesquisar
        </button>
        <button
          className="searchButton"
          onClick={() => setProducts(allProducts)}
        >
          X
        </button>
      </div>
      <MenuContainer
        products={products}
        handleClick={handleClick}
      ></MenuContainer>
      <div className="chosenProducts">
        CARRINHO:
        <ul className="chosenProductsList">
          {currentSale.map((item, index) => (
            <li className="chosenProductsItem" key={index}>
              <span>{item.name}</span> <br />
              Categoria: {item.category}
              <br />
              Preço: {item.price} <br />
              <button
                onClick={() => handleClickRemoveItem(item.id)}
                className="searchButton"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
        <p>
          Subtotal: R${" "}
          {currentSale.reduce((acc, item) => {
            let count = acc + item.price;
            return Math.round(count * 100) / 100;
          }, 0)}
        </p>
      </div>
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
