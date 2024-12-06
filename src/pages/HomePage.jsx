import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from '../components/header/logo.png';
// Estilos com styled-components, comando que precisa: npm install styled-components

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff; 
  background-size: cover;
  background-position: center;
  padding: 20px;
  text-align: center;
  color: #333;
`;

const HomeContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const HomeTitle = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: bold;
`;

const HomeDescription = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const HomeButton = styled.button`
  background-color: #263950;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #3b5272;
    transform: scale(1.1);
  }
`;

function HomePage() {
  const navigation = useNavigate();

  function navegar() {
    navigation("/sobre");
  }

  return (
    <HomeContainer>
      <HomeContent>
        <img src={logo} className="h-25" alt="ToDo Logo" />
        <HomeTitle>Bem-vindo ao Gerenciador de Tarefas</HomeTitle>
        <HomeDescription>
          Organize suas tarefas de forma simples e eficiente. Descubra as
          vantagens de usar um gerenciador de tarefas para aumentar sua produtividade.
        </HomeDescription>
        <HomeButton onClick={navegar}>
          Conhecer as vantagens de um Gerenciador de tarefas
        </HomeButton>
      </HomeContent>
    </HomeContainer>
  );
}

export default HomePage;
