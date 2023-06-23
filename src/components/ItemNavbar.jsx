import styled from "styled-components";
import PropTypes from 'prop-types';

const ItemStyle = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 18px;

    @media(min-width: 1280px) {
        font-size: 24px;
    }

    a {
        text-decoration: none;
        color: black;

        :hover {
            color: ${({theme}) => theme.colors.brandColor};
        }
    }
`;

export default function ItemNavbar({ children }) {
    return (
        <ItemStyle>
            <a href="#">
                {children}
            </a>
        </ItemStyle>
    )
}

ItemNavbar.propTypes = {
    children: PropTypes.node,
};