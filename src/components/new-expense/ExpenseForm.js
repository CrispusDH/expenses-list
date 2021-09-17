import React, { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = ({ onSubmit, onCancel }) => {
  const defaultInputs = {
    title: '',
    price: '',
    date: '',
  };
  const [{ title, date, price }, setInputs] = useState(defaultInputs);
  const titleChangeHandle = (event) => {
    setInputs(
      (state) => {
        return {
          ...state,
          title: event.target.value,
        }
      });
  }
  const priceChangeHandle = (event) => {
    setInputs(
      (state) => {
        return {
          ...state,
          price: event.target.value,
        }
      });
  }
  const dateChangeHandle = (event) => {
    setInputs(
      (state) => {
        return {
          ...state,
          date: event.target.value,
        }
      });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({title, date: new Date(date), price})
    setInputs(defaultInputs);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__control'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandle}/>
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' value={price} min='0.01' step='0.01' onChange={priceChangeHandle}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={date} min='2021-01-01' max='2023-12-31' onChange={dateChangeHandle}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
