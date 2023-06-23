import styled from "styled-components";
import Subtitulo from "./Subtitulo";
import maoSegurandoPrato from '../assets/img_segurando_prato.png';

const MainContainerStyle = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const BannerStyle = styled.div`
    background-image: url(${maoSegurandoPrato});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-top: 48px;

    @media(min-width: 1280px) {
        width: 604px;
        height: 500px;
        margin-top: 100px;
    }
`;

const ConteudoStyle = styled.div`
    color: ${({theme}) => theme.colors.dark10};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    margin-top: 54px;

    @media(min-width: 1280px) {
        text-align: start;
        align-items: baseline;
    }

    & h2 {
        max-width: 181px;
        line-height: 130%;

        @media(min-width: 1280px) {
            max-width: 361px;
        }
    }

    & p {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        line-height: 25px;
        max-width: 290px;

        @media(min-width: 1280px) {
            font-size: 24px;
            max-width: 500px;
        }
    }

    & a {
        font-family: 'Inter', sans-serif;
        color: ${({theme}) => theme.colors.brandColor};
        cursor: pointer;
        font-size: 16px;
        text-decoration: underline;
        font-weight: 600;

        @media(min-width: 1280px) {
            font-size: 24px;
            margin-top: 16px;
        }
    }
`;

export default function Banner() {
    return (
        <MainContainerStyle>
            <BannerStyle data-aos='fade-right'/>
            <ConteudoStyle data-aos='fade-up'>
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