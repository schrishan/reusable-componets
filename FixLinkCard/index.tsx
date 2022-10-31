import React, { useState } from 'react';
import { LazyImage, PrimaryButton } from '../';
import './style.scss';
import { Click } from "./../../analytics/analytics";
interface Props {
    imgSrc: string;
    imgAlt?: string;
    idAttr?: string;
    classAttr?: string;
    label: string;
    link: string;
    target?: string;
}

const FixLinkCard = (props: Props) => {
    const openLink = (name: any) => {
        window.open(props.link, props.target ? props.target : '_blank');
        Click({ i: 400, m: name });
    }
    return (
        <>
            <div className={`fixed-link-card ${props.classAttr ? props.classAttr : ''}`} {...props.idAttr ? { id: props.idAttr } : {}}>
                <div className="card-img-wrp">
                    <LazyImage src={props.imgSrc} alt={props.imgAlt} />
                </div>
                <div className="fix-link-btn-wrp">
                    <PrimaryButton onClick={() => openLink(props.label)}>{props.label}</PrimaryButton>
                </div>
                <a href={props.link} className="card-link-overlay" {...props.target ? { target: props.target } : { target: '_blank' }} ></a>
            </div>
        </>
    )
}

export default FixLinkCard;
