import React, { useState } from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { Card } from '../ui/Card';
import { InitialExpenseForm } from './InitialExpenseForm';

export const NewExpense = ({ onCreate }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const submitHandler = (data) => {
    const expense = {
      ...data,
      id: Math.random().toString(),
    }
    onCreate(expense);
    setIsCollapsed(() => true);
  }
  const clickHandler = () => {
    setIsCollapsed(() => false);
  }
  const cancelHandler = () => {
    setIsCollapsed(() => true);
  }

  const content = isCollapsed
    ? <InitialExpenseForm onClick={clickHandler}/>
    : <ExpenseForm onSubmit={submitHandler} onCancel={cancelHandler}/>;


  return (
    <Card className='new-expense'>
      {content}
    </Card>
  )
}
