import React, { useEffect, useState } from "react";
import "./Styles.scss";

export const Preloader = () => {
    useEffect(() => {
        document.body.classList.add('body-fixed');
        return()=>{
            document.body.classList.remove('body-fixed');
        }
    }, [])
  return (
    <>
      <div className="btgs-wave-loader-animation inline" aria-label="loader">
        <div className="btgs-wave-loader-animation-inner">
            <span id="purple-dot"></span>
            <span id="pink-dot"></span>
            <span id="blue-dot"></span>
        </div>
        </div>
    </>
  );
};
