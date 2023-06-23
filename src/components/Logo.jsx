import styled from "styled-components";

const LogoStyle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.colors.dark10};

    @media(min-width: 1280px) {
        font-size: 40px;
    }

    & span {
        color: ${({theme}) => theme.colors.brandColor};
    }
`;

export default function Logo() {
    return (
        <LogoStyle>
            Food<span>JP</span>
        </LogoStyle>
    )
}