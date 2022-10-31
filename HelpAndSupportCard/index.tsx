import React, { useEffect, useState } from 'react';
import  LinkButton from './../LinkButton';
import './style.scss';
import { Click } from "./../../analytics/analytics";
interface Props {
    title: string;
    content: any;
    icon?: string;
    linkLabel?:string;
    link?:string;
    linkTarget?:string;
}
const HelpAndSupportCard = (props: Props) => {
    function analyticsClick(name:any){
        Click({ i: 400, m: name });
    }
    return(
        <div className="help-card  pos-r" onClick={()=>analyticsClick(props.linkLabel)}>
        <div role="heading" className="help-card-section-header">
            <span className="card-title">{props.title}</span>
        </div>
        <div className="help-card-card-body">
            <span className="bt-p bodytitle">{props.content}</span>
            { props.icon &&
                <span className="card-icon-wrp iconholder">
                    <i className={`ma-icon md images ma-${props.icon} `}></i>
                </span>
            }
        </div>
        { props.link &&
            <div className="help-card-btn-wrp pos-r">
                <LinkButton target={props.linkTarget} hrefLink={props.link}>{props.linkLabel}</LinkButton>
            </div>
        }
        {props.link &&
            <a className="card-link"  href={props.link} target={props.linkTarget}></a>
        }
    </div>
    )
}

export default HelpAndSupportCard;