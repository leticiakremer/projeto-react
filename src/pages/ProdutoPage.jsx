import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProdutoPage() {
    const urlApi = "http://localhost:3001/products"
    const [produtos, setProdutos] = useState([])
    const navigation = useNavigate()

    async function getAllProducts() {
        const response = await fetch(urlApi)
        const produtos = await response.json()

        setProdutos(produtos)
    }

    async function deleteProduct(id) {
        await fetch(`${urlApi}/${id}`, {
            method: "DELETE"
        })

        getAllProducts()
        
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>

            {produtos.map(cadaProduto => {
                return <tr>
                            <td>{cadaProduto.id}</td>
                            <td>{cadaProduto.name}</td>
                            <td>{cadaProduto.price}</td>
                            <td>
                                <button onClick={() => deleteProduct(cadaProduto.id)}>Deletar</button>
                            </td>
                            <td>
                                <button onClick={() =>  navigation(`/produtos/${cadaProduto.id}`)}>Visualizar</button>
                            </td>
                            <td>
                                <button onClick={() =>  navigation(`/editar/${cadaProduto.id}`)}>Editar</button>
                            </td>
                        </tr>
            })}

        </table>
    </div>
}

export default ProdutoPage;