import React, { useState } from 'react'
import data from './data';
import './style.css'
function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id){
    setSelected(id === selected? null : id);
  }

  return (
    <div className='wrapper'>
      <div className='accordian'>
        {
          data && data.length > 0
            ? data.map((dataItem) => (
              <div className='item'>
                <div className='title' onClick={()=>handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  selected === dataItem.id 
                  ? (
                  <div className='desc'>
                    <p>{dataItem.answer}</p>
                  </div>
                  )
                  : null
               }
              </div>

            ))
            : (
              <div>
                <h3>data not found</h3>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Accordian