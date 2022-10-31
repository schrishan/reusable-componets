import React, { ReactNode } from "react";
import './style.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  
  children: ReactNode;
  }

const BTComponent = (props:Props) => {

    return(

        <>
        <div
  className="tooltip-holder"
 
>
  <div className="tooltip-wrp">
    
    <div className="tooltip-body">
    {props.children}
    </div>
  </div>
</div>

        </>

    )
}

export default BTComponent;