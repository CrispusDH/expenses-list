import React, { useState } from 'react';
import './Content.css';
import { Filter } from '../expenses-filter/Filter';
import { List } from './List';
import { Card } from '../ui/Card';
import { ExpensesChart } from './ExpensesChart';
import { Item } from './item/Item';

export const Content = ({ rawExpenses }) => {
  const [year, setYear] = useState('2021');
  const [isFiltered, setIsFiltered] = useState(false);
  const filterHandler = (year) => {
    setYear(() => year);
    setIsFiltered(() => true);
  }
  const filterRawExpensesByYear = () => {
    return rawExpenses.filter(({ date }) => date.getFullYear() === Number(year));
  }
  const rawFilteredExpenses = (() => {
    const list = [];
    for (const expense of isFiltered ? filterRawExpensesByYear() : rawExpenses) {
      list.push(expense);
    }
    return list;
  })();

  return (
    <Card className='expenses'>
      <Filter year={year} onFilter={filterHandler} />
      <ExpensesChart rawFilteredExpenses={rawFilteredExpenses}/>
      <List rawFilteredExpenses={rawFilteredExpenses} isFiltered={isFiltered} year={year}/>
    </Card>
  );
}
