import styled from "styled-components";
import Banner from "./components/Banner";
import Busca from "./components/Busca";
import CardCardapio from "./components/CardCardapio";
import CardComentario from "./components/CardComentario";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Localizacao from "./components/Localizacao";
import Titulo from "./components/Titulo";

const BodyContainerStyle = styled.body`
  margin: 0 30px;
`;

function App() {
  return (
    <BodyContainerStyle>
      <Header />
      <Titulo />
      <Banner />
      <CardCardapio />
      <CardComentario />
      <Localizacao />
      <Busca />
      <Footer />
    </BodyContainerStyle>
  );
}

export default App;