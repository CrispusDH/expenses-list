import React from 'react';
import './Item.css'
import { Date } from './Date';
import { Card } from '../../ui/Card';

export const Item = ({ date, title, price, id }) => {
  return (
    <li key={id}>
      <Card className='expense-item'>
        <Date date={date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{price}</div>
        </div>
      </Card>
    </li>
  );
}
