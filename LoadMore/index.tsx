import React, {ReactNode, useState } from 'react';
import './style.scss';

interface Props {
    children: ReactNode;
    onClick?:any;              
    scrollId?:string;
}

const LoadMore = (props: Props) => {
    return (
        <>
            <div className="loadMore-btn" onClick={props.onClick}>
                <span className="loadMore-txt">{props.children}</span>
                <span className="loadMore-icon"><i className="bt-arrow-down bt-icon black"></i></span>
            </div>
        </>
    )
}

export default LoadMore;
