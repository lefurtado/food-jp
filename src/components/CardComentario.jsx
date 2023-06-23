import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import Subtitulo from "./Subtitulo";
import avatar1 from '../assets/profile1.png';
import avatar2 from '../assets/profile2.png';

const comentarios = [
    {
        id: 1,
        avatar: avatar1,
        nome: 'Daniele Almeida',
        comentario: 'Ótimo serviço! Encantada com a qualidade dos pratos.',
        nota: 5
    },
    {
        id: 2,
        avatar: avatar2,
        nome: 'Ricardo França',
        comentario: 'Não é apenas a comida excelente, o serviço torna a experiência especial.',
        nota: 5
    }
];

const MarginStyle = styled.div`
    margin: 56px 0;

    @media(min-width: 1280px) {
        margin-top: 100px;
    }
`;

const CardComentarioFlexStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 28px;

    @media(min-width: 1280px) {
        gap: 20px;
    }
`;

const CardComentarioStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.dark30};
    width: 312px;
    max-height: 300px;
    border-radius: 8px;
    padding: 24px 0;

    @media(min-width: 1280px) {
        box-sizing: border-box;
        width: 604px;
        min-height: 390px;
        align-items: flex-start;
        padding: 0 40px;
        border-radius: 16px;
    }
`;

const ImagemComentarioStyle = styled.div`
    & img {
        width: 60px;

        @media(min-width: 1280px) {
            width: 120px;
        }
    }
`;

const ComentarioStyle = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media(min-width: 1280px) {
        text-align: start;
        gap: 16px;
        margin-top: 24px;
    }

    & h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 18px;
        color: ${({theme}) => theme.colors.dark10};

        @media(min-width: 1280px) {
            font-size: 32px;
        }
    }

    & p {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: ${({theme}) => theme.colors.dark20};
        max-width: 270px;

        @media(min-width: 1280px) {
            max-width: 490px;
            font-size: 24px;
        }
    }

    & .nota {
        display: flex;
        align-self: center;
        justify-content: space-between;
        width: 122px;
        color: ${({theme}) => theme.colors.brandColor};

        @media(min-width: 1280px) {
            align-self: baseline;
        }
    }
`;

export default function CardComentario() {

    const renderizarEstrelas = (nota) => {
        return Array(nota).fill().map((_, index) => (
            <AiFillStar size={20} key={index} />
        ));
    };

    return (
        <>
            <MarginStyle data-aos='zoom-in'>
                <Subtitulo>Comentários</Subtitulo>
            </MarginStyle>
            <CardComentarioFlexStyle data-aos='zoom-in'>
                {comentarios.map((comentario) => (
                    <CardComentarioStyle key={comentario.id}>
                        <ImagemComentarioStyle>
                            <img src={comentario.avatar} />
                        </ImagemComentarioStyle>
                        <ComentarioStyle>
                            <h2>{comentario.nome}</h2>
                            <p>{comentario.comentario}</p>
                            <div className="nota">
                                {renderizarEstrelas(comentario.nota)}
                            </div>
                        </ComentarioStyle>
                    </CardComentarioStyle>
                ))}
            </CardComentarioFlexStyle>
        </>
    )
}