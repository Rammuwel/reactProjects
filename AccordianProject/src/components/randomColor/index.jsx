import React, { useRef, useState } from 'react'

import './index.css';


function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("rgb(44, 33, 33)");

    const bkcRef = useRef();

     function randomColorUtility(length){
        return Math.floor(Math.random()*length);
     }

    function handleHexRandomColor(){
         const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        let hexColor = "#";

        for(let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor)
        setColor(hexColor);
        bkcRef.current.style.background = color;
    }

    function handleRgbRandomColor(){
        const r =  randomColorUtility(256);
        const g =  randomColorUtility(256);
        const b =  randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
        bkcRef.current.style.background = color;
        
    }


  return (
    <div className='randomColorContainer'>
        <div className='heading'>
           <h2>Random Color</h2>
        </div>
        <div className='randBtns'>
            <button onClick={()=>setTypeOfColor('hex')} className={typeOfColor === 'hex' ? 'active' : ''}>Hex color</button>
            <button onClick={()=>setTypeOfColor('rgb')} className={typeOfColor !== 'hex' ? 'active' : ''}>RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? ()=>handleHexRandomColor('hex') : ()=>handleRgbRandomColor('hex')}>Genrate Color</button>
        </div>
       <div ref={bkcRef} className='randomColor' style={{background:{color}}}>
           <h3>{typeOfColor === 'hex' ? 'HEX' : 'RGB'}</h3>
           <h3>{color}</h3>
       </div>
    </div>
  )
}

export default RandomColor;