import styled from "styled-components";
import PropTypes from 'prop-types';

const ItemFooterStyle = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 14px;

    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.dark10};
    }
`;

export default function ItemFooter({ children }) {
    return (
        <ItemFooterStyle>
            <a href="#">
                {children}
            </a>
        </ItemFooterStyle>
    )
}

ItemFooter.propTypes = {
    children: PropTypes.node,
};