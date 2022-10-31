import React, {ReactNode, useState } from 'react';
import './style.scss';

interface Props {
    children: ReactNode;
    disabled?:boolean;
    onClick?:any;
 
}

const PrimaryButton = (props: Props) => {
    return (
        <>
            <button type='button' className={`bt-btn bt-primary-btn ${props.disabled ? "bt-disabled" : ""}`} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
        </>
    )
}

export default PrimaryButton;
