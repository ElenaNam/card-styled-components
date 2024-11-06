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
`;
