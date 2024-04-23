import "./style.css"

const Tabela = ({products}) => {
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
                    <td>{prod.nome}</td>
                    <td>{prod.preco}</td>
                    <td>{prod.estoque}</td>
                    <td><button>Editar</button><button>Excluir</button></td>
                    <td></td>    
                </tr>
                
            ))}
        </tbody>
        </table>
    )
}
export default Tabela;