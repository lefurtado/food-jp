import styled from "styled-components";
import { AiOutlineSearch, AiOutlineEnvironment } from "react-icons/ai";

const InputStyle = styled.div`
    position: relative;
    display: flex;
    margin-top: 32px;
    
    input {
        box-sizing: border-box;
        padding: 0 30px 0 30px;
        border-radius: 10px 0px 0px 10px;
        border: 1px solid ${({theme}) => theme.colors.dark10};
        border-right: none;
        height: 40px;
        background-color: #FBFBFB;
        width: 100%;

        &::placeholder {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            color: ${({theme}) => theme.colors.dark10};
            padding-left: 10px;
        }
    }

    .gps {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: ${({theme}) => theme.colors.brandColor};
    }
`;

const LupaStyle = styled.button`
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51px;
    background-color: ${({theme}) => theme.colors.brandColor};
    border-radius: 0px 10px 10px 0px;

    a {
        text-decoration: none;
        color: #FBFBFB;
    }
`;

export default function Busca() {
    return (
        <InputStyle>
            <AiOutlineEnvironment className="gps" size={20} />
            <input type="text" placeholder="Localização para entrega"/>
            <LupaStyle>
                <a href="#"><AiOutlineSearch size={25}/></a>
            </LupaStyle>
        </InputStyle>
    )
}