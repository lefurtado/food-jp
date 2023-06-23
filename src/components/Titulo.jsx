import styled from "styled-components";
import BtnCardapio from "./BtnCardapio";
import sushi from '../assets/sushi-japanese.png';

const TituloContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 35px;
    margin-top: 57px;

    @media(min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 100px;
    }
`;

const ContainerDescricaoStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`;

const TituloStyle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 32px;
    color: ${({theme}) => theme.colors.dark10};

    @media(min-width: 1280px) {
        font-size: 48px;
    }
`;

const DescricaoStyle = styled.div`
    font-family: 'Inter', sans-serif;
    color: ${({theme}) => theme.colors.dark10};
    font-size: 16px;
    line-height: 25px;
    max-width: 278px;

    @media(min-width: 1280px) {
        max-width: 520px;
        font-size: 24px;
    }
`;

const ImagemTitulo = styled.div`
    display: none;

    @media(min-width: 1280px) {
        display: block;
        background-image: url(${sushi});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 400px;
        height: 534.703px;
    }
`;

export default function Titulo() {
    return (
        <TituloContainerStyle >
            <ContainerDescricaoStyle data-aos='zoom-in'>
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
            </ContainerDescricaoStyle>
            <ImagemTitulo data-aos='zoom-in'/>
        </TituloContainerStyle>
    );
}