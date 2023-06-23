import styled from "styled-components";
import SubtituloFooter from "./SubtituloFooter";
import ItemFooter from "./ItemFooter";
import Logo from "./Logo";

const FooterStyle = styled.div`
    margin: 56px 0;

    @media(min-width: 1280px) {
        display: flex;
        align-items: baseline;
    }
`;

const LinkContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 126px;
    max-height: 200px;
    gap: 28px;
    margin-top: 32px;

    @media(min-width: 1280px) {
        flex-direction: row;
        flex-wrap: nowrap;
        max-width: fit-content;
        gap: 50px;
        margin-left: 51px;
    }
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
                    <LinkStyle data-aos='fade-up'>
                        <SubtituloFooter>Contato</SubtituloFooter>
                        <ItemFooter>+55 21 9999-9999</ItemFooter>
                        <ItemFooter>email@gmail.com</ItemFooter>
                    </LinkStyle>
                    <LinkStyle data-aos='fade-up'>
                        <SubtituloFooter>Sobre nós</SubtituloFooter>
                        <ItemFooter>Menu</ItemFooter>
                        <ItemFooter>Valores</ItemFooter>
                        <ItemFooter>Pagina principal</ItemFooter>
                    </LinkStyle>
                    <LinkStyle data-aos='fade-up'>
                        <SubtituloFooter>Serviços</SubtituloFooter>
                        <ItemFooter>Entrega</ItemFooter>
                        <ItemFooter>Retirada</ItemFooter>
                    </LinkStyle>
                </LinkContainerStyle>
        </FooterStyle>
    )
}