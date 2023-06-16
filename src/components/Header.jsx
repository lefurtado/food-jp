import styled from "styled-components";
import { useState, useEffect } from "react";
import Logo from "./Logo";

// TESTE
const MenuHamburguer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 25px;
    cursor: pointer;
`;

const LinhaMenu = styled.div`
    width: 100%;
    height: 3px;
    background-color: #000;
    margin-bottom: 5px;
`;

const TesteStyle = styled.div`
    position: fixed;
    width: 50%;
    height: 100%;
    background-color: black;
    z-index: 9999;
    top: 0;
    bottom: 0;
    right: 0;

    & ul {
        position: fixed;
        color: white;
        top: 20%;
        right: 10%;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        line-height: 29px;
    }
`;

const BotaoFechar = styled.div`
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
    z-index: 9999;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 25px;
`;

const LinhaMenuFechar = styled.div`
    width: 100%;
    height: 3px;
    background-color: white;
    margin-bottom: 5px;
`;
// TESTE

const HeaderContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const HamburgerMenuStyle = styled.span`
    width: 24px;
    height: 24px;
    background-color: black;
`;



export default function Header() {
    // TESTE
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const fecharMenu = () => {
        setMenuAberto(false);
    };

    useEffect(() => {
        if (menuAberto) {
        document.body.classList.add('bloquear-scroll');
        } else {
        document.body.classList.remove('bloquear-scroll');
        }
    }, [menuAberto]);
    // TESTE
    return (
        <HeaderContainerStyle>
            <Logo />
            {/* TESTE */}
            <div>
                <MenuHamburguer onClick={toggleMenu}>
                    <LinhaMenu />
                    <LinhaMenu />
                    <LinhaMenu />
                </MenuHamburguer>

                {menuAberto && (
                    <TesteStyle>
                            <BotaoFechar onClick={fecharMenu}>
                                <LinhaMenuFechar />
                                <LinhaMenuFechar />
                                <LinhaMenuFechar />
                            </BotaoFechar>
                        {/* Conteúdo do menu */}
                        <ul>
                            <li>Início</li>
                            <li>Cardápio</li>
                            <li>Sobre</li>
                        </ul>
                    </TesteStyle>
                )}
            </div>
            {/* TESTE */}
            {/* <HamburgerMenuStyle /> */}
        </HeaderContainerStyle>
    )
}