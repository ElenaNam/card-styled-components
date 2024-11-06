import React from 'react';
import styled from 'styled-components';
import Img from '../assets/images/card-img.png'

export const Card = () => {
    return (
        <CardWrapper>
            <CardImg src={Img} alt='Headline' />
            <CardTitle>Headline</CardTitle>
            <CardDesc>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardDesc>
        </CardWrapper>
    )
}


const CardWrapper = styled.div`
    width: 300px;
    height: 350px;
    margin: 100px auto;
    padding: 10px 22px 10px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    border-radius: 15px;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    max-height: 170px;
    border-radius: 10px;
`

const CardTitle = styled.h1`
    margin: 0;
    font-size: 16px;
    font-family: Inter;
    font-weight: 700;
    color: #000;
    text-align: left;
`
const CardDesc = styled.div`
    font-size: 12px;
    line-height: 20px;
    font-family: Inter;
    font-weight: 500;
    color: #ABB3BA;
    text-align: left;
`