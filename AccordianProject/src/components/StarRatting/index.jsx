import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

function StartRatting({noOfStars = 5}) {
    
    const [ratting, setRatting] =useState(0);
    const [hover, setHover] =useState(0);

  function handleClick(currentIndex){
    setRatting(currentIndex);
    console.log(ratting);
    
      
  }


  function handleMouseEnter(currentIndex){
      setHover(currentIndex);
  }

  function handleMouseLeave(){
      setHover(ratting);
  }
  return (
    <div className='starRatting'>
        <div className='heading'>
            <h2>Star Ratting</h2>
        </div>
        <div className='stars'>
           {
            [...Array(noOfStars)].map((_, index) =>{
                index += 1
                return <FaStar
                 key={index}
                 className={index <= (hover || ratting) ? 'activeStar' : 'inactiveStar'}
                 onClick={()=>handleClick(index)}
                 onMouseEnter={()=>handleMouseEnter(index)}
                 onMouseLeave={()=>handleMouseLeave()}
                 size={40}
                />
            })
           }
        </div>
    </div>
  )
}

export default StartRatting