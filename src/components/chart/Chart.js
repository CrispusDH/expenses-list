import React from 'react';
import './Chart.css';
import { ChartBar } from './ChartBar'

export const Chart = ({ dataPoints }) => {
  const values = dataPoints.map(({ value }) => value);
  const maximum = Math.max(...values);
  const content = dataPoints.map(({ value, label }) => ChartBar({value, maximum, label}));

  return (
    <div className='chart'>
      {content}
    </div>
  )
}
