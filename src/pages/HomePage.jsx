import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigation = useNavigate()

    function navegar() {
        navigation("/sobre")
    }

    return <div>
        <button onClick={navegar}>Navegar com hook</button>
        {/* {data.map()} */}
        </div>
}

export default HomePage;