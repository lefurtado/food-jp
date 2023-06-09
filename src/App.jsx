import { useEffect } from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import Busca from "./components/Busca";
import CardCardapio from "./components/CardCardapio";
import CardComentario from "./components/CardComentario";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Localizacao from "./components/Localizacao";
import Titulo from "./components/Titulo";
import Aos from "aos";
import "aos/dist/aos.css";

const BodyContainerStyle = styled.body`
  margin: 0 30px;

  @media (min-width: 1280px) {
    max-width: 1228px;
    margin: auto;
  }
`;

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
