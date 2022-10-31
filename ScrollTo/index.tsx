import React from 'react';
import './style.scss';

interface Props {
    onClick?:any;              
    scrollId?:string;
}

const ScrollTo = (props: Props) => {
    const scrollToTop = () => {
        if (!props.scrollId) {
            (function smoothscroll() {
              var currentScroll =
                document.documentElement.scrollTop || document.body.scrollTop;
              if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 8);
              }
            })();
        } else {
            (document.getElementById(
            props.scrollId
            ) as HTMLFormElement).scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'start',
            });
        }
    }
    return (
        <>
            <div className="scroll-top" onClick={() => {scrollToTop()}}>
                <i className="bt-icon bt-arrow-up black"></i>
            </div>
        </>
    )
}

export default ScrollTo;