import React, { useState } from 'react';

function DateIncrement() {

  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  let day = new Date();
  day.setDate(day.getDate() + count);

  return (
  
    <div className = 'date'>

      <h2>Date Counter</h2>

      <div className = ''>

        <button className = 'btn' onClick = {() => {
          if(step > 1){
          setStep(step - 1);
          }}}>-</button>

        step: {step}

        <button className = 'btn' onClick = {() =>{
          if(step >= 1){
            setStep(step + 1);
          }
        }}>+</button>

      </div>

      <div className = 'count'>

        <button className = 'btn' onClick = {() =>{
          setCount((count -= step));
        }}>-</button>

        count: {count}

        <button className = 'btn' onClick = {() =>{
          setCount((count += step));
        }}>+</button>

      </div>

      <div>

        {count >= 0 ? `${count} days from today is ${day.toDateString()}` : 
        `${count} days ago from today is ${day.toDateString()}` }
        
      </div>

    </div>
    )

  }

export default DateIncrement;