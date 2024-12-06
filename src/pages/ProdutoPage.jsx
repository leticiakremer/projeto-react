import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProdutoPage() {
    const urlApi = "http://localhost:3001/tasks"
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


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-20 bg-[#f0f8ff]" >
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" class="px-6 py-4 text-lg font-semibold">
                            Task
                        </th>
                        <th scope="col" class="px-6 py-4 text-lg font-semibold">
                            Prioridade
                        </th>
                        <th scope="col" class="px-6 py-4 text-lg font-semibold">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-4 text-lg font-semibold">
                            Categoria
                        </th>
                        <th scope="col" class="px-2 py-4 text-lg font-semibold">
                            Editar
                        </th>
                        <th scope="col" class="px-2 py-4 text-lg font-semibold">
                            Visualizar
                        </th>
                        <th scope="col" class="px-2 py-4 text-lg font-semibold">
                            Deletar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(cadaProduto => {
                        return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                
                                <p class="text-lg">{cadaProduto.titulo}</p>
                            </td>
                            <td className="px-6 py-4">
                                {/* Card de Prioridade */}
                                <span
                                    className={`inline-block text-sm font-medium me-2 px-3 py-1.5 rounded-lg shadow-md w-20 text-center ${cadaProduto.prioridade === "alta"
                                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                            : cadaProduto.prioridade === "media"
                                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                                                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                        }`}
                                >
                                    {cadaProduto.prioridade}
                                </span>
                            </td>
                            <td class="px-6 py-4 ">
                                
                                <p class="text-lg">{cadaProduto.status}</p>
                            </td>
                            <td class="px-6 py-4 ">
                                <p class="text-lg">{cadaProduto.categoria}</p>
                            </td>
                            <td class="px-2 py-2">
                                <button onClick={() => navigation(`/editar/${cadaProduto.id}`)} class="font-medium  dark:hover:underline text-xl">Editar</button>
                            </td>
                            <td class="px-2 py-4">
                                <button onClick={() => navigation(`/produtos/${cadaProduto.id}`)} class="font-medium text-red-600 dark:text-blue-500 hover:underline text-xl">Visualizar</button>
                            </td>
                            <td class="px-2 py-4">

                                <button onClick={() => deleteProduct(cadaProduto.id)} class="font-medium text-blue-600 dark:text-red-500 hover:underline text-xl">Deletar</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>


    </div>
}

export default ProdutoPage;