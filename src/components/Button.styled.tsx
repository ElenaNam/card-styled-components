import styled, { css } from "styled-components";

type ButtonPropsType = {
    primary?: boolean,
    outlined?: boolean, 
    color?: string,
}

export const Button = styled.button<ButtonPropsType>`
    padding: 4px 10px 6px;
    width: 86px;
    overflow: hidden;
    border-radius: 5px;

    transition: all .3s ease;

    font-size: 10px;
    line-height: 20px;
    font-family: Inter;
    font-weight: 700;

    &:active {
        transform: translate(-1px, 1px);
    }

    ${props => props.primary && css<ButtonPropsType>`
        border: 2px solid transparent;
        background-color: ${props.color || '#4E71FE'};
        color: #fff;

        &:hover {
            background-color: #cd09b3;
        }
    `}

    ${props => props.outlined && css<ButtonPropsType>`
        border: 2px solid ${props.color || '#4E71FE'};
        background-color: transparent;
        color: ${props.color || '#4E71FE'};

        &:hover {
            border-color: #cd09b3;
            color: #cd09b3;
        }
    `}
`;