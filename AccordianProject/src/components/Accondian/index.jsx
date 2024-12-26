import React, { useState } from 'react'
import data from './data';
import './style.css'
function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultipleSelection(curretId) {
    const copyMulti = [...multipleSelected];
    const findCurrentId = copyMulti.indexOf(curretId);


    console.log(findCurrentId);
    if (findCurrentId === -1) copyMulti.push(curretId);
    else copyMulti.splice(findCurrentId, 1);
    setMultipleSelected(copyMulti);
  }



  console.log(selected, multipleSelected);
  return (
    <div className='wrapper'>
      <div className='heading'>
        <h2>Accodian</h2>
      </div>
      <button className='multiSelectBtn' onClick={() => setEnableMultiSelection(!enableMultiSection)}>Set Multi Selection</button>
      <div className='accordian'>
        {
          data && data.length > 0
            ? data.map((dataItem) => (
              <div className='item' key={dataItem.id}>
                <div className='title' onClick={enableMultiSection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {

                  enableMultiSection 
                  ? multipleSelected.indexOf(dataItem.id) !== -1 &&  
                  <div className='desc'>
                    <p>{dataItem.answer}</p>
                 </div>
                 :
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