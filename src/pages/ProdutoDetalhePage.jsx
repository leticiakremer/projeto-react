import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProdutoDetalhePage() {
    const parms = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    async function getProductById() {
        const response = await fetch(`http://localhost:3001/tasks/${parms.id}`);
        const product = await response.json();
        setProduct(product);
    }

    useEffect(() => {
        getProductById();
        document.body.style.backgroundColor = "#f0f8ff";
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px auto",
            padding: "30px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
            maxWidth: "600px",
            fontFamily: "'Roboto', sans-serif",
            textAlign: "center",
        },
        title: {
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#2c3e50",
        },
        detail: {
            margin: "10px 0",
            fontSize: "18px",
            color: "#4b6584",
        },
        label: {
            fontWeight: "bold",
            color: "#778ca3",
        },
        button: {
            marginTop: "30px",
            padding: "12px 24px",
            backgroundColor: "#263950",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#3b5272",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.title}>Detalhes da tarefa</div>
            <div style={styles.detail}>
                <span style={styles.label}>Título:</span> {product.titulo}
            </div>
            <div style={styles.detail}>
                <span style={styles.label}>Descrição:</span> {product.descricao}
            </div>
            <div style={styles.detail}>
                <span style={styles.label}>Prioridade:</span> {product.prioridade}
            </div>
            <div style={styles.detail}>
                <span style={styles.label}>Status:</span> {product.status}
            </div>
            <div style={styles.detail}>
                <span style={styles.label}>Categoria:</span> {product.categoria}
            </div>
            <button
                style={styles.button}
                onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = styles.button.backgroundColor)
                }
                onClick={() => navigate("/produtos")}
            >
                Voltar
            </button>
        </div>
    );
}

export default ProdutoDetalhePage;