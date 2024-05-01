import React from 'react';
import "./style.css"

const Forms = ({ saveProduct, name, setName, price, setPrice, stock, setStock, edit }) => {
  const saveForm = (e) => {
    e.preventDefault();
    saveProduct(e);
  };

  const deleteProduct = () => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  return (
    <div>
      <h3>Cadastro de Produtos</h3>
      <form onSubmit={saveForm}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="price">Preço</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label htmlFor="stock">Estoque</label>
        <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} />

        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Forms;
