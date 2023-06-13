import styled from "styled-components";
import BtnCardapio from "./BtnCardapio";

const TituloContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 35px;
    margin-top: 57px;
`;

const TituloStyle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: ${({theme}) => theme.colors.dark10};
`

const DescricaoStyle = styled.div`
    font-family: 'Inter', sans-serif;
    color: ${({theme}) => theme.colors.dark10};
    font-size: 16px;
    line-height: 25px;
    max-width: 278px;
`

export default function Titulo() {
    return (
        <TituloContainerStyle>
            <TituloStyle>
                <h1>Comida Oriental</h1>
            </TituloStyle>
            <DescricaoStyle>
                <p>
                A culinária Japonesa é bastante equilibrada, sendo muito rica em
                peixes (ômega 3), vegetais, massas e ingredientes frescos.
                </p>
            </DescricaoStyle>
            <BtnCardapio />
        </TituloContainerStyle>
    );
}