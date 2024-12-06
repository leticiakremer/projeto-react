import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function ProdutoLayout() {
    return (
        <>
            <h1>PRINCIPAL DO PRODUTO</h1>
            <Outlet />
            <h1>footer PRODUTO</h1>
        </>
    )
}

export default ProdutoLayout;