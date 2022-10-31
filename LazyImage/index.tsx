import React, { useState, useRef } from 'react';
import { useIntersection } from './intersectionObserver';
import './style.scss';

interface Props {
  src:string;               
  alt?:string;
}

const LazyImage = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrorLoaded, setIsErrorLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  useIntersection(imgRef, () => {
    setIsInView(true);
  
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
    setIsErrorLoaded(false);
    
  };
  const handleOnError = () => {
    setIsLoaded(true);
    setIsErrorLoaded(true);
   
  };
  return (
    <div
      className="lazy-img por"
      ref={imgRef }
    >
      {isInView && (
        <>
          {!isLoaded && <div className="image-loader">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>}
          <img className={`${isLoaded ? "isLoaded" : ""}`} alt={props.alt ? props.alt : ''}
            src={props.src}
            onLoad={handleOnLoad}
            onError={handleOnError}
          />
          {isErrorLoaded && <div className="img-err-loaded pos-r">
            <img src={process.env.PUBLIC_URL + '/images/myAccount/alert_grey.png'} alt={props.alt ? props.alt : 'Image not found'} />  
          </div>}
        </>
      )}
    </div>
  );
};

export default LazyImage;
