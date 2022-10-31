import React, {ReactNode, useState } from 'react';
import LazyImage from '../LazyImage';
import './style.scss';

interface Props {
    children?: ReactNode;
    imgSrc:string;
    imgAlt?:string;
    title?:string;
    description?:any;
    idAttr?:string;
    classAttr?:string;
}

const StatusCard = (props: Props) => {
    return (
        <>
            <div className={`status-card ${props.classAttr ? props.classAttr : ''}`} {... props.idAttr ? {id: props.idAttr} : {}}>
                <div className="card-img-wrp">
                    <LazyImage src={props.imgSrc} alt={props.imgAlt}/>
                </div>
                <div className="content-wrp">
                    <h3 className="card-title">{props.title}</h3>
                    <span className="card-desc bt-p">{props.description}</span>
                    <div className="func-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusCard;
