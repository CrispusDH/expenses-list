import React from 'react';
import './ChartBar.css';

export const ChartBar = ({ value, maximum, label }) => {
  let height = '0%';
  if (maximum > 0) {
    height = `${Math.round((value / maximum) * 100)}%`;
  }

  return (
    <div className='chart-bar' key={label}>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height }} />
      </div>
      <div className='chart-bar__label'>
        { label }
      </div>
    </div>
  )
}
