import styled from "styled-components";
import pratoUm from '../assets/img-3.png';
import pratoDois from '../assets/img-1.png';
import pratoTres from '../assets/img-2.png';

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

const TituloStyled = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    margin: 56px 0 118px 0;
    color: ${({theme}) => theme.colors.dark10};
`;

const CardContainerFlexStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 118px;
    /* CRIAR UM MEDIA QUE CONTEMPLE UM GAP MENOR PRA DESKTOP */
`;

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.dark30};
    width: 312px;
    height: 401px;
    border-radius: 8px;
`;

const ImagemStyle = styled.div`
    position: relative;
    bottom: 10%;

    & img {
        width: 209px;
    }
`;

const DescricaoStyle = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 24px;
        color: ${({theme}) => theme.colors.dark10};
    }

    & p {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.colors.dark20};
        max-width: 249px;
    }

    & span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 32px;
        color: ${({theme}) => theme.colors.dark10};
    }
`;

export default function CardCardapio() {
    return (
        <div>
            <TituloStyled>Mais populares</TituloStyled>
            <CardContainerFlexStyle>
                {pratos.map((prato) => (
                        <CardStyle key={prato.id}>
                            <ImagemStyle>
                                <img src={prato.imagem} alt={prato.alt} />
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