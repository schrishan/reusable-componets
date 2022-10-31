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
    linkTarget?:boolean;
}
const ManageAccountCard = (props: Props) => {
    function analyticsClick(name:any){
        Click({ i: 400, m: `Manage your account:${name}` });
    }
    return (
        <div className="bt-card default pos-r">
            <div role="heading" className="card-header pos-r">
                <span className="card-title">{props.title}</span>
                {props.icon &&
                    <span className="card-icon-wrap">
                        <i className={`ma-icon ma-${props.icon} `}></i>
                    </span>
                }
            </div>
            <div className="card-body" >
                <p>{props.content}</p>
                {props.link &&
                    <div className="link-btn-wrp pos-r" onClick={()=>analyticsClick(props.linkLabel)}>
                        <LinkButton hrefLink={props.link} target={props.linkTarget ? '_blank':'_self'}>{props.linkLabel}</LinkButton>
                    </div>
                }
                {props.link &&
                    <a className="card-link" onClick={()=>analyticsClick(props.linkLabel)} href={props.link} target={props.linkTarget ? '_blank':'_self'}></a>
                }
            </div>
        </div>
    )
}
export default ManageAccountCard;