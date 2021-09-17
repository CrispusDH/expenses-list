import React from 'react';
import './Filter.css';

export const Filter = ({ onFilter, year }) => {
  const changeHandler = (event) => {
    onFilter(event.target.value)
  }

  return (
    <div className='filter'>
      <div className='filter__control'>
        <label>Filter by year</label>
        <select value={year} onChange={changeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};
