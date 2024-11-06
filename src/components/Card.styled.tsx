import React from 'react';
import Img from '../assets/images/card-img.png'
import { CardWrapper } from './CardWrapper.styled';
import { CardImg } from './CardImg.styled';
import { CardDesc } from './CardDesc.styled';
import { CardTitle } from './CardTitle.styled';
import { Button } from './Button.styled';

export const Card = () => {
    return (
        <CardWrapper>
            <CardImg src={Img} alt='Headline' />
            <CardTitle>Headline</CardTitle>
            <CardDesc>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardDesc>
            <div className='card__btns'>
                <Button primary >See more</Button>
                <Button outlined >Save</Button>
            </div>
        </CardWrapper>
    )
}
