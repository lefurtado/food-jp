import styled from "styled-components";
import PropTypes from 'prop-types';

const SubtituloFooterStyle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.dark10};
    margin-bottom: 5px;

    @media(min-width: 1280px) {
        font-size: 32px;
        margin-bottom: 24px;
    }
`;

export default function SubtituloFooter({ children }) {
    return (
        <SubtituloFooterStyle>{children}</SubtituloFooterStyle>
    )
}

SubtituloFooter.propTypes = {
    children: PropTypes.node,
};