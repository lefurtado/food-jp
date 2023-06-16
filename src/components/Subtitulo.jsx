import styled from "styled-components";
import PropTypes from 'prop-types';

const SubtituloStyled = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: ${({theme}) => theme.colors.dark10};
`;

export default function Subtitulo({ children }) {
    return (
        <SubtituloStyled>
            {children}
        </SubtituloStyled>
    )
}

Subtitulo.propTypes = {
    children: PropTypes.node,
};