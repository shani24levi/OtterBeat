import React from 'react';
import { Radius, FileColor } from './card.types';
import { CardText, CustomCardButton } from './card.style';

interface CardProps {
  props: {
    songid: number;
    title: string;
  };
  radius: Radius;
  fileColor?: FileColor;
  imgBg?: string;
  onChange?: () => void;
}

const Card: React.FC<CardProps> = ({
  props,
  radius,
  fileColor,
  imgBg,
}): JSX.Element => {
  return (
    <CustomCardButton radius={radius} key={props.songid} bgcolor={imgBg}>
      <CardText>{props.title}</CardText>
    </CustomCardButton>
  );
};

export default Card;
