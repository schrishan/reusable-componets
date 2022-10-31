import React, {ReactNode, useEffect, useState } from 'react';
import './style.scss';

interface Props {
    children?: ReactNode;
    onClick?:any;
    showToastr:boolean;
}

const ToastrSuccess = (props: Props) => {
    const [loadToastr, setLoadToastr] = useState(false);
    // setTimeout(() => {
    //     setLoadToastr(props.showToastr);
    //     console.log('loadToastr2', loadToastr);
    //     console.log('props.showToastr2', props.showToastr)
    // },0);
    return (
        <>
        {/* {props.showToastr === true ?  */}
            <div className="toastr-container">
            <div className="success">
            <div className="success-item item flex">
                <div className="alert-wrp">
                    <div className="message col">
                    <i className="bt-icon bt-confirmation-message alert-icon"></i
                    ><span className="alert-msg">
                    {props.children}
                        
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* </div> :""} */}
        </>
    )
}

export default ToastrSuccess;
