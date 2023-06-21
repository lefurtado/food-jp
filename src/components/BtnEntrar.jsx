import styled from "styled-components";

const BtnLogin = styled.button`
    display: none;

    @media(min-width: 1280px) {
        display: block;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 18px;
        padding: 10px 60px;
        border: 2px solid #292929;
        border-radius: 10px;
        cursor: pointer;
        background-color: white;
    }
`;

export default function BtnEntrar() {
    return (
        <BtnLogin>
            Entrar
        </BtnLogin>
    )
}