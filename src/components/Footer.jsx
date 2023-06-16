import styled from "styled-components";
import SubtituloFooter from "./SubtituloFooter";
import ItemFooter from "./ItemFooter";
import Logo from "./Logo";

const FooterStyle = styled.div`
`;

export default function Footer() {
    return (
        <FooterStyle>
            <Logo />
            <div>
                <SubtituloFooter>Contato</SubtituloFooter>
                <ItemFooter>+55 21 9999-9999</ItemFooter>
                <ItemFooter>email@gmail.com</ItemFooter>
            </div>
            <div>
                <SubtituloFooter>Sobre nós</SubtituloFooter>
                <ItemFooter>Menu</ItemFooter>
                <ItemFooter>Valores</ItemFooter>
                <ItemFooter>Pagina principal</ItemFooter>
            </div>
            <div>
                <SubtituloFooter>Serviços</SubtituloFooter>
                <ItemFooter>Entrega</ItemFooter>
                <ItemFooter>Retirada</ItemFooter>
            </div>
        </FooterStyle>
    )
}