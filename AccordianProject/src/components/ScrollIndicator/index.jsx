import React, { useEffect, useRef, useState } from 'react'
import "./style.css"

function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const scrollRef = useRef();
    const scroIndRef = useRef();


    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);

            if (!response.ok) {
                throw new Error(`HTTP error ! status : ${response.status}`);
            }

            const result = await response.json();
            setData(result.products);
            setLoading(false);

        } catch (error) {
            setErrorMessage(error.message)
            setLoading(false);
        }
    }

     
    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScroll(e) {
        scrollRef.current.style.width = `${(e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)) * 100}%`;
        // console.log((e.target.scrollTop / (e.target.scrollHeight-e.target.clientHeight))*100); 
    }
    
   
    useEffect(() => {
        const element = scroIndRef.current;
    
        if (element) {
            // console.log('Adding scroll listener');
            element.addEventListener('scroll', handleScroll);
        }
    
        return () => {
            if (element) {
                // console.log('Removing scroll listener');
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);
    
    
    
    
    if(loading){
        return <div>loading...! please wait..</div>
    }
    if(errorMessage){
        return <div>Error: {errorMessage}</div>
    }


    


    return (
        <div className='scrollIndicator' > 
             <div className='heading'>
                 <h2>Scroll Indicator</h2>
             </div>
              <div className='scrollIndicator-container' ref={scroIndRef}>
                   <div className='upper-slider'>
                       <div className='lower-slider' ref={scrollRef} >

                       </div>
                   </div>
                   <div className='product-container'>
                      {
                        data.map((item)=>(
                           <p key={item.id}>{item.title}</p>
                        ))
                      }
                   </div>
              </div>
        </div>
    )
}

export default ScrollIndicator