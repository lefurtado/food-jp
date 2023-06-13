import styled from "styled-components";

const HeaderContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const LogoStyle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.colors.dark10};

    & span {
        color: ${({theme}) => theme.colors.brandColor};
    }
`;

const HamburgerMenuStyle = styled.span`
    width: 24px;
    height: 24px;
    background-color: black;
`;



export default function Header() {
    return (
        <HeaderContainerStyle>
            <LogoStyle>
                Food<span>JP</span>
            </LogoStyle>
            <HamburgerMenuStyle />
        </HeaderContainerStyle>
    )
}