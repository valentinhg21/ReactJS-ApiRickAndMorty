import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
background-color: #fff;
border-radius: 10px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
display: flex;
max-width: 100%;
margin: 20px;
overflow: hidden;
width: 700px;
height: 250px;


@media (max-width: 575.98px) {

  margin: 15px;
  width: 305px;
  height: 540px;
  flex-direction: column;
}


@media (min-width: 576px) and (max-width: 767.98px) {
  max-width: 100%;
  margin: 10px;
  width: 590px;
  height: 250px;

}

@media (min-width: 768px) and (max-width: 991.98px) {
  max-width: 100%;
  width: 680px;
 }



`;
const CardImg = styled.img`
  width: 40%;

  @media (max-width: 575.98px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 50%;
  }

`;

const CardInfo = styled.div`
  width: 60%;
  @media (max-width: 575.98px) {
    width: 100%;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {

    max-width: 100%;

  }
`;

const Title = styled.h5`
  padding-left:1rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-size: 30px;

  @media (max-width: 575.98px) {
  margin-top: .5rem;
  font-size: 24px;
  }
`;

const Subtitle =  styled.h3`
  padding-left:1rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
  font-size: 16px;
  font-weight: 400;
`;

const Description = styled.h4`
  padding-left:1rem;
  margin-top: 0rem;
  margin-bottom:0rem;
  font-size: 16px;
`;


const Item = (props) => {




  return (
      <Card>
          <CardImg src={props.chars.image}></CardImg>
          <CardInfo>
            <Title>{props.chars.name}</Title>
            <Description>{props.chars.status} - {props.chars.species}</Description>
            <Subtitle>Gender:</Subtitle>
            <Description>{props.chars.gender}</Description>
            <Subtitle>Origin:</Subtitle>
            <Description>{props.chars.origin.name}</Description>
          </CardInfo>
      </Card>

  )
}

export default Item
