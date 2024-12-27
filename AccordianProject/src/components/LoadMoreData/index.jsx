import React, { useEffect, useState } from 'react';
import './style.css';
function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(false);



    async function fetchProduct() {
        try{
             setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0? 0: count + 20}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            
           if(result && result.products && result.products.length){
              setProducts((preData)=>[...preData, ...result.products]);
              setLoading(false);
           }
            

        }catch(e){
        console.log(e);
        setLoading(false);
        
        }
    }


    useEffect(()=>{
        fetchProduct();
    }, [count]);

    useEffect(()=>{
        if(products.length === 100){
           setDisabledBtn(true);
        }
    }, [products]);
    console.log(products);

    if(loading){
        return <div>loading data ! please wait</div>
    }


    
  return (
    <div className='loadMoreData'>
        <div className='headingLoad'>
            <h2>Load More Data</h2>
        </div>
        <div className='loadMoreComtainer'>
         { products && products.length ?
           products.map((item)=>(
            <div
            key={item.id}
            className='product'
            >
             <img src={item.thumbnail} alt="product" />
             <p>{item.title}</p>
            </div>
           ))
           : null
        }
        </div>
       <div className='loadMoreBtnContainer'>
        <button
        disabled={disabledBtn}
        className="load-more-btn"
        onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setCount((prevCount) => prevCount + 1);
        }}
         >
        Load more
         </button>
         {
            disabledBtn === true && <div>no have more data</div>
         }
        </div>
    </div>
  )
}

export default LoadMoreData