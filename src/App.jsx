import { useState } from 'react';
import Tabela from './components/tabela';
import Forms from './components/formulario';

function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [edit, setEdit] = useState(false);

  const saveProduct = (e) => {
    e.preventDefault();
    if (!edit) {
      setId((prevId) => prevId + 1);
      setProducts((prevProducts) => [...prevProducts, { id, name, price, stock }]);
    } else {
      const updatedProducts = products.map((product) => {
    if (product.id === id) {
          return { ...product, name, price, stock };
        }
        return product;
      });
      setProducts(updatedProducts);
      setEdit(false);
    }
    clearForms();
  };

  const deleteProduct = () => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  const editProduct = (productId) => {
    const product = products.find((prod) => prod.id === productId);
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setStock(product.stock);
    setEdit(true);
  };

  const clearForms = () => {
    setName('');
    setPrice('');
    setStock('');
  };

  return (
    <div className='container'>
      <Tabela products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
      <Forms
        saveProduct={saveProduct}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        stock={stock}
        setStock={setStock}
        edit={edit}
      />
    </div>
  );
}

export default App;
