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
`

export default function BtnCardapio() {
    return (
        <a href="#">
            <BtnStyle>
                Cardápio
            </BtnStyle>
        </a>
    )
}