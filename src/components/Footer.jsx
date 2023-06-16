import styled from "styled-components";
import SubtituloFooter from "./SubtituloFooter";
import ItemFooter from "./ItemFooter";
import Logo from "./Logo";

const FooterStyle = styled.div`
    margin: 56px 0;
`;

const LinkContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 126px;
    max-height: 200px;
    gap: 28px;
    margin-top: 32px;
`;

const LinkStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Footer() {
    return (
        <FooterStyle>
            <Logo /> 
                <LinkContainerStyle>
                    <LinkStyle>
                        <SubtituloFooter>Contato</SubtituloFooter>
                        <ItemFooter>+55 21 9999-9999</ItemFooter>
                        <ItemFooter>email@gmail.com</ItemFooter>
                    </LinkStyle>
                    <LinkStyle>
                        <SubtituloFooter>Sobre nós</SubtituloFooter>
                        <ItemFooter>Menu</ItemFooter>
                        <ItemFooter>Valores</ItemFooter>
                        <ItemFooter>Pagina principal</ItemFooter>
                    </LinkStyle>
                    <LinkStyle>
                        <SubtituloFooter>Serviços</SubtituloFooter>
                        <ItemFooter>Entrega</ItemFooter>
                        <ItemFooter>Retirada</ItemFooter>
                    </LinkStyle>
                </LinkContainerStyle>
        </FooterStyle>
    )
}