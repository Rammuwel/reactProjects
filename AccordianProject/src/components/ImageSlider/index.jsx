import React, { useEffect, useState } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css';

function ImageSlider({ url, limit=5, page=1}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);


    async function fetchImg(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            
            
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url != '') fetchImg(url);
    }, [url]);

    if (loading) {
        return <div>Loading data! Please wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error Occured ! {errorMsg}</div>
    }
    
     

    function handlePre(){
        setCurrentSlide(currentSlide === 0 ? images.length -1: currentSlide - 1);
    }
    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }


    return (
        <div className='imageSlider'>

            <div className='heading'>
                <h2>Image Slider</h2>
            </div>

            <div className='imagesContainer'>
                {   
                    images && images.length ? 
                    <div className='images'>
                        <BsArrowLeftCircleFill 
                         className="arrow arrow-left"
                         onClick={()=>handlePre()}
                         />
                     {images.map((imgItem, index)=>(
                       <img
                        key={index} 
                        src={imgItem.download_url}
                        alt="image"
                        className={currentSlide === index? 'current-img' : 'hide-current-img'}
                        />
                    ))}
                      <BsArrowRightCircleFill 
                      className="arrow arrow-right"
                      onClick={()=>handleNext()}
                      />
                      <div className='circle-indicators'>
                         {
                             images && images.length ? 
                            images.map((_, index)=>(
                              <button
                              key={index}
                              onClick={()=>setCurrentSlide(index)}
                              className={currentSlide === index? 'current-indicator' : 'current-indicator update-current-indicator'}
                              ></button> 
                            ))
                            : null
                         }
                      </div>
                    </div>
                    : <div>Images not found</div>
                }
            </div>
        </div>
    )
}

export default ImageSlider