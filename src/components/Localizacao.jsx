import styled from "styled-components";
import Subtitulo from "./Subtitulo";
import mapa from '../assets/map.png';

const MarginStyle = styled.div`
    margin: 56px 0 24px 0;

    h2 {
        @media(min-width: 1280px) {
            text-align: start;
        }
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
    }
`;

export default function Localizacao() {
    return (
        <div>
            <MarginStyle>
                <Subtitulo>Localização</Subtitulo>
            </MarginStyle>
            <MapaStyle />
        </div>
    )
}