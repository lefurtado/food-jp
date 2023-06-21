import styled from "styled-components";
import PropTypes from 'prop-types';

const ItemStyle = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 18px;

    a {
        text-decoration: none;
        color: black;
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