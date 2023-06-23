import styled from "styled-components";

const BtnStyle = styled.button`
        background-color: ${({theme}) => theme.colors.brandColor};
        padding: 12px 40px;
        border-radius: 6px;
        border: none;
        color: white;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        cursor: pointer;

        @media(min-width: 1280px) {
            max-width: 292px;
            font-size: 24px;
        }
`

export default function BtnCardapio() {
    return (
        <BtnStyle>
            Cardápio
        </BtnStyle>
    )
}