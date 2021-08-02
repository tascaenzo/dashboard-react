import React, { ReactElement } from 'react';
import { CardContainer, Row, Title, Item } from './Card.style';
import { Props } from './helper/card.interface';


const Card:  <T>(p: Props<T>) => ReactElement<Props<T>>  = ({ item, columns }) => {
  const itemArray = Object.values(item);
  return (
    <CardContainer>
      {columns.map((row, i) => (
        <Row key={i.toString()}>
          <Title>{row.Header}</Title>
          <Item>{itemArray[i]}</Item>
        </Row>
      ))}
    </CardContainer>
  )
}

export default Card
