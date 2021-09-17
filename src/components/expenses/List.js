import React from 'react';
import './List.css';
import { Item } from './item/Item';

export const List = ({ rawFilteredExpenses, isFiltered, year }) => {
  const content = rawFilteredExpenses.length !== 0
    ? rawFilteredExpenses.map((rawExpense) => Item(rawExpense))
    : <h2 className='list__fallback'>Found no expenses</h2>

  return (
    <ul className='list'>
      {content}
    </ul>
  )
}
