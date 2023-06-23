import styled from "styled-components";
import Subtitulo from "./Subtitulo";
import mapa from '../assets/map.png';

const MarginStyle = styled.div`
    margin: 56px 0 24px 0;

    @media(min-width: 1280px) {
        margin: 100px 0 48px 0;
    }
`;

const MapaStyle = styled.div`
    min-width: 312px;
    min-height: 242px;
    border-radius: 8px;
    background-image: url(${mapa});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media(min-width: 1280px) {
        max-width: 1228px;
        height: 500px;
        border-radius: 16px;
    }
`;

export default function Localizacao() {
    return (
        <>
            <MarginStyle data-aos='zoom-in'>
                <Subtitulo>Localização</Subtitulo>
            </MarginStyle>
            <MapaStyle data-aos='zoom-in-up'/>
        </>
    )
}