import React, { useEffect, useState } from "react";
import "./Styles.scss";

export const Loader = () => {
  return (
    <>
      <div className="btgs-wave-loader-animation inline loaderdiv" aria-label="loader">
        <div className="btgs-wave-loader-animation-inner innerloaderdiv">
            <span id="purple-dot"></span>
            <span id="pink-dot"></span>
            <span id="blue-dot"></span>
        </div>
        </div>
    </>
  );
};