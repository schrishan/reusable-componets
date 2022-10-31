import React from "react";
import './style.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    dataTip?: string;
    isError?: string;
}

const ErrorAlertComponent = (props: Props) => {
    return (
        <>
            <div className="invalid-alert">
                <span className="alert-icon">
                    <i className="bt-icon bt-generic-alert"></i>
                </span>
                <span className={props.isError === 'true'?'errorWarning':''}>{props.dataTip}</span>
            </div>
        </>

    )
}
export default ErrorAlertComponent;

