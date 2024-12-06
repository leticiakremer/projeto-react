import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SobreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
min-height: 100vh;  background-color: #f0f8ff;
  padding: 20px;
  color: #333;
`;

const SobreContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  font-size: 1.1rem;
`;

const FeatureItem = styled.li`
  color: #3498db;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  background-color: #263950;;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b5272;
  }
`;

function SobrePage() {
    const navigate = useNavigate();

    const voltarParaHome = () => {
        navigate("/"); // Volta pra home
    };

    return (
        <SobreContainer>
            <SobreContent>
                <Title>Sobre o Gerenciador de Tarefas</Title>
                <Paragraph>
                    Nosso Gerenciador de Tarefas foi criado para ajudar você a manter sua
                    vida mais organizada e produtiva. Com uma interface simples e fácil de
                    usar, você pode adicionar, editar e excluir tarefas de maneira rápida e
                    eficiente.
                </Paragraph>
                <Paragraph>
                    Aqui estão alguns recursos do Gerenciador de Tarefas:
                </Paragraph>
                <FeatureList>
                    <FeatureItem>Criação e edição de tarefas.</FeatureItem>
                    <FeatureItem>Visualização de todas as suas tarefas em um único lugar.</FeatureItem>
                    <FeatureItem>Organização de tarefas por categorias.</FeatureItem>
                    <FeatureItem>Interface intuitiva e amigável.</FeatureItem>

                </FeatureList>
                <BackButton onClick={voltarParaHome}>Voltar para a página inicial</BackButton>
            </SobreContent>
        </SobreContainer>
    );
}

export default SobrePage;
