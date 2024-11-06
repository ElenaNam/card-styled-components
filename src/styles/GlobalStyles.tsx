import { createGlobalStyle } from "styled-components";
import InterMediumWoff2 from "../assets/fonts/Inter-Medium.woff2";
import InterBoldWoff from "../assets/fonts/Inter-Bold.woff";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-weight: 500;
        font-style: normal;
        font-display: swap;
        src: url(${InterMediumWoff2}) format('woff2')
    }

    @font-face {
        font-family: 'Inter';
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        src: url(${InterBoldWoff}) format('woff2')
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
    }

    .card__btns {
        display: flex;
        gap: 12px;
    }
`;
