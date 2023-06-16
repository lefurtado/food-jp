import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        margin: 0 30px;
    }

    body.bloquear-scroll {
        overflow: hidden;
    }
`;