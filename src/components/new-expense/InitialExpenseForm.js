import React from 'react';
import './InitialExpenseForm.css';

export const InitialExpenseForm = ({ onClick }) => {
  const clickHandler = () => {
    onClick();
  }

  return (
    <div className='initial-expense-form__actions'>
      <button type='submit' onClick={clickHandler}>Add New Expense</button>
    </div>
  )
}
