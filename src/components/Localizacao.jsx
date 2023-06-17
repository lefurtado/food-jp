import styled from "styled-components";
import Subtitulo from "./Subtitulo";
import mapa from '../assets/map.png';

const MarginStyle = styled.div`
    margin: 56px 0 24px 0;
`;

const MapaStyle = styled.div`
    min-width: 312px;
    min-height: 242px;
    border-radius: 8px;
    background-image: url(${mapa});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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