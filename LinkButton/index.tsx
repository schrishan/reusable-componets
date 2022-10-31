import React, {ReactNode, useState } from 'react';
import './style.scss';

interface Props {
    children: ReactNode;
    onClick?:any;
    omClick?:any;
    hrefLink?:string;               
    target?:string;
}

const LinkButton = (props: Props) => {
    return (
        <>
            <span className="link-btn-wrp">
                <a href={props.hrefLink} target={props.target} onClick={props.onClick} className="link-btn">
                    <span className='btn-txt'>
                        {props.children}
                    </span>
                    <span className="link-arrow"><i className="bt-icon bt-arrow-right black"></i></span>
                </a>
            </span>
        </>
    )
}

export default LinkButton;
