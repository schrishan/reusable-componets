import React, {ReactNode, useState } from 'react';
import './style.scss';

interface Props {
    children: ReactNode;
    disabled?:boolean;
    onClick?:any;
    omClick?:any;
}

const SecondaryButton = (props: Props) => {
    return (
        <>
            <button type='button' className={`bt-btn bt-secondary-btn ${props.disabled ? "bt-disabled" : ""}`} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
        </>
    )
}

export default SecondaryButton;
