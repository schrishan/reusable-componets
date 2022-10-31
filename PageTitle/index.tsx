import React from 'react'
import './style.scss';

interface Props {
    title: any;
    intro?:any;
}

const PageTitle = (props: Props) => {
    return (
        <>
            <div className="pg-title-wrp">
                <h1 className="pg-title">{props.title}</h1>
                { props.intro ?
                <div className="pg-intro">{props.intro}</div>
                :''}
            </div>
        </>
    )
}

export default PageTitle;
