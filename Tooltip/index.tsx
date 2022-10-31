import React from "react";
import './style.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    toolTip?: string;
    isError?:string;
  }

const ToolTipComponent = (props:Props) => {

    return(

        <>
        <div tool-tip={props.toolTip}>
                                 </div>
                                 
        </>

    )
}

export default ToolTipComponent;