import styled from "styled-components";
import Subtitulo from "./Subtitulo";

const MainContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const BannerStyle = styled.div`
    background-image: url("/src/assets/img segurando prato.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-top: 48px;
`;

const ConteudoStyle = styled.div`
    color: ${({theme}) => theme.colors.dark10};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    margin-top: 54px;

    & h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 24px;
        max-width: 181px;
        line-height: 130%;
    }

    & p {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        line-height: 25px;
        max-width: 290px;
    }

    & a {
        font-family: 'Inter', sans-serif;
        color: ${({theme}) => theme.colors.brandColor};
        cursor: pointer;
        font-size: 16px;
        text-decoration: underline;
        font-weight: 600;
    }
`;

export default function Banner() {
    return (
        <MainContainerStyle>
            <BannerStyle />
            <ConteudoStyle>
                <Subtitulo>Feita de forma tradicional</Subtitulo>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.
                </p>
                <a href="#">
                    Ler mais sobre o modo de preparo 
                </a>
            </ConteudoStyle>
        </MainContainerStyle>
    )
}