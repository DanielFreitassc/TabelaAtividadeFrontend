import "./style.css"

const Tabela = ({products, editProduct, deleteProduct}) => {
    return (
        <table className="table">
        <thead>
            <tr className="tableHead">
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Estoque(kg)</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {products.map((prod) => (
                <tr className="tableRow" key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>{prod.stock}</td>
                    <td>
                        <button onClick={() => editProduct(prod.id)}>Editar</button>
                        <button onClick={() => deleteProduct(prod.id)}>Deletar</button>
                    </td>
                     
                </tr>
                
            ))}
        </tbody>
        </table>
    )
}
export default Tabela;