import React, { useState, useEffect, useRef } from "react";
import './style.scss';
import { Click } from "./../../analytics/analytics";
interface optionObj {
    Name: string;
}

interface Props {
    options: optionObj[];
    selected: any;
    onSelectedChange: any;
    title?: any;
}

const Selectbox = (props: Props) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(document.createElement("div"))
    useEffect(() => {
        const onBodyClick = (event: any) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick);
        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const renderedOptions = props && props.options && props.options.map((option: optionObj) => {
        if (option.Name === props.selected.Name) {

            return null;
        }
        return (
            <div key={option.Name}
                className="option"
                onClick={() => selectedChange(option)}>
                {option.Name}
            </div>
            );
        });
        function selectedChange(option:any){
            props.onSelectedChange(option);
            // console.log("option", option);
            if ((props.title && props.title === "Select service") || (props.title && props.title === "Select fault status") || (props.title && props.title === "Account name")) {
                Click({ i: 400, m: `Dropdown:${props.title? props.title :""} - ${option.Name}` });
            }
        }
    
    return (
        <div ref={ref}
            onClick={() => setOpen(!open)} role="combobox" className={`bt-select-box ${open ? "bt-active" : ""}`}>
            {props.selected.Name && <div role="heading" className="selected-option">{props.selected.Name}</div>}
            <i className="bt-icon bt-arrow-down"></i>
            <div
                onClick={() => setOpen(!open)} role="list" className={`select-option-list ${open ? "bt-active" : ""}`}>
                {renderedOptions}
            </div>
        </div>
    );
};
export default Selectbox;