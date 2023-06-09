import styled from "styled-components";
import pratoUm from '../assets/img-3.png';
import pratoDois from '../assets/img-1.png';
import pratoTres from '../assets/img-2.png';
import Subtitulo from "./Subtitulo";

const pratos = [
    {
        id: 1,
        imagem: pratoUm,
        nome: 'Ramen de Frango',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        preco: '30',
        alt: 'Ramen de Frango'
    },
    {
        id: 2,
        imagem: pratoDois,
        nome: 'Ramen Apimentado',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        preco: '30',
        alt: 'Ramen Apimentado'
    },
    {
        id: 3,
        imagem: pratoTres,
        nome: 'Ramen Tradicional',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        preco: '30',
        alt: 'Ramen Tradicional'
    }
];

const CardContainerFlexStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 118px;

    @media(min-width: 1280px) {
        gap: 44px;
    }
`;

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.dark30};
    width: 312px;
    height: 401px;
    border-radius: 8px;

    @media(min-width: 1280px) {
        width: 380px;
        height: 450px;
        border-radius: 32px;
        margin-top: 54px;
    }
`;

const ImagemStyle = styled.div`
    position: relative;
    bottom: 15%;

    @media(min-width: 1280px) {
        bottom: 25%;
    }

    & img {
        width: 209px;

        @media(min-width: 1280px) {
            width: 291px;
        }
        transition: transform 0.5s ease;
            &:hover {
            transform: scale(1.1);
        }
    }

    & img.terceiro-item {
        @media(min-width: 1280px) {
            width: 275px;
        }
    }
`;

const DescricaoStyle = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media(min-width: 1280px) {
        margin-top: -50px;
    }

    & h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 24px;
        color: ${({theme}) => theme.colors.dark10};

        @media(min-width: 1280px) {
            font-size: 32px;
            font-weight: 500;
        }
    }

    & p {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.colors.dark20};
        max-width: 249px;

        @media(min-width: 1280px) {
            font-size: 18px;
            line-height: 160%;
        }
    }

    & span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 32px;
        color: ${({theme}) => theme.colors.dark10};
    }
`;

const MarginStyle = styled.div`
    margin: 56px 0 118px 0;

    @media(min-width: 1280px) {
        h2 {
            text-align: center;
            margin-top: 100px;
        }
    }
`;

export default function CardCardapio() {
    return (
        <div>
            <MarginStyle data-aos='zoom-in'>
                <Subtitulo>Mais populares</Subtitulo>
            </MarginStyle>
            <CardContainerFlexStyle>
                {pratos.map((prato, index) => (
                        <CardStyle key={prato.id}>
                            <ImagemStyle data-aos='zoom-in'>
                                <img src={prato.imagem} alt={prato.alt} className={index === 2 ? 'terceiro-item' : ''}/>
                            </ImagemStyle>
                            <DescricaoStyle>
                                <h2>{prato.nome}</h2>
                                <p>{prato.descricao}</p>
                                <span>R$ {prato.preco}</span>
                            </DescricaoStyle>
                        </CardStyle>
                ))}
            </CardContainerFlexStyle>
        </div>
    )
}