import React  from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import './index.scss'

export default function RadioButton(props) {
    
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  
  return (
      <div className="radioButton">
        {
          props.radioLst.map(item =>
            <label className="container" key={nanoid()}>
              <span>{item}</span>
              <input type="radio" value={item} onChange={handleChange} checked={selectedValue === item}/>
              <span className="checkmark"></span>
            </label>
          )
        }
      </div>
  );
}