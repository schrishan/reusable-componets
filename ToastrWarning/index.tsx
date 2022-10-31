import React, {ReactNode, useState } from 'react';
import './style.scss';

interface Props {
    children?: ReactNode;
    onClick?:any;
    showToastr:boolean;
    hideToastrWarning?:any;
}

const ToastrWarning = (props: Props) => {
    const hideToastrWarning =()=>{
        props.hideToastrWarning();
    }
    return (
        <>
         {props.showToastr === true ? 
            <div className="toastr-container">
  <div className="warning">
<div className="warning-item item flex">
  <div className="alert-wrp">
    <div className="message col">
      <i className="bt-icon bt-generic-alert black alert-icon"></i
      ><span className="alert-msg">
      {props.children}
      </span>
    </div>
    <span className="close col" 
      ><i className="ma-icon ma-close" onClick={() => hideToastrWarning()}></i
    ></span>
  </div>
</div>
</div>
</div>:""}
        </>
    )
}

export default ToastrWarning;
