import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function PrincipalLayout() {
    return (
        <>
            <Header />
            <Outlet /> 
        </>
    )
}

export default PrincipalLayout;