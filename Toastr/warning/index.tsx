import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Click, Load } from "../../../analytics/analytics";
import { useStore } from "../../../app/stores/store";
import "./Styles.scss";
import {ReactComponent as AlertOutline} from '../../../assets/fonts/alert-outline.svg'; 

interface Props {
  closeWarning?: any;
  notificationTitle: string;
  bodyMessage?: string;
  callToAction?: any;
  callToActionText?: any;
  showPopup: boolean;
  popupType: "ERROR" | "WARNING" | "SUCCESS";
}

export const Warning = (props: Props) => {
  const { commonStore } = useStore();
  const { apiErrorTry } = commonStore;
  
  const history = useHistory();
  const [popupClass, setPopupClass] = useState("warning-alert");

  useEffect(() => {
    if (props.notificationTitle === "Sorry, something’s wrong with the system. Please try again." && apiErrorTry === 1) {
      Load({
        i: 114,
      });
    }
    else if (props.notificationTitle === "Safety check") {
      Load({
        i: 115,
      });
    }
    else if (props.bodyMessage === "If for some reason you don’t receive it, we can only send it one more time.") {

      Load({
        i: 117,
        e32: "Email Verification-Success pop up 2: The email is on its way. If for some reason you don’t receive it, we can only send it one more time."
      });

    }
    else if (props.bodyMessage === "If you still don’t receive it, unfortunately we’re unable to verify you at this email address. Please try re-registering with a different one.") {
      Load({
        i: 118,
        e32: "Email Verification-Success pop up 3: The email is on its way. If you still don’t receive it, unfortunately we’re unable to verify you at this email address. Please try re-registering with a different one."
      });
    }

    else if (props.notificationTitle === "The email is on its way. Please check your inbox.") {
      Load({
        i: 116,
        e32: "Email Verification-Success pop up 1: The email is on its way. Please check your inbox."
      });
    }
    else if (apiErrorTry === 1) {
      Load({
        i: 113,
      });
    }

  }, [props.notificationTitle]);

  useEffect(() => {
    if (props.showPopup)
      setPopupClass("warning-alert");
    else
      setPopupClass("warning-alert dismissed");
  }, [props.showPopup]);

  useEffect(() => {
    if (apiErrorTry > 1) {
      if(window.location.pathname.includes("ForgotUsernameandPassword"))
      {
      history.push({
        pathname: "/ForgotUsernameandPassword#/technicalError",
      });  //  need to uncomment later depends on mergejourney
    }
    else if(window.location.pathname.includes("AssistedJourney"))
    {
      history.push({
        pathname: "/AssistedJourneyTechnicalError",
      }); 
    }
      // assisted journey
     /*  history.push({
        pathname: "/technicalError",
      }); */
    }
  }, [apiErrorTry]);

  function handleClose() {
    setPopupClass("warning-alert dismissed");
    setTimeout(() => {
      props.closeWarning(false);
    }, 1000);
  }
  const getPopupClassByType = () => {
    if (props.popupType === "WARNING")
      return " warn";
    if (props.popupType === "SUCCESS")
      return " success";
    return "";
  }
  return (
    <>
      <div className={popupClass + getPopupClassByType()}>
        <span
          className="close-icon"
          onClick={() => {

            if (props.notificationTitle === "Sorry, something’s wrong with the system. Please try again.") {
              Click({
                i: 114,
                m: "Close",
              });
            }
            else if (props.notificationTitle === "Safety check") {
              Click({
                i: 115,
                m: "Close",
              });
            }
            else if (props.bodyMessage === "If you still don’t receive it, unfortunately we’re unable to verify you at this email address. Please try re-registering with a different one.") {
              Click({
                i: 118,
                m: "Close"
              });
            }
            else if (props.notificationTitle === "The email is on its way. Please check your inbox.") {
              Click({
                i: 116,
                m: "Close"
              });
            }
            else if (props.bodyMessage === "If for some reason you don’t receive it, we can only send it one more time.") {
              Click({
                i: 117,
                m: "Close"
              });
            }

            else {
              Click({
                i: 113,
                m: "Close",
              });
            }
            handleClose();
          }}
        >
          <i className="bt-icon bt-icon-close"></i>
        </span>
       {getPopupClassByType()===" success" ? <i className={  "bt-icon-tick-circle-outline"}></i> :   <AlertOutline />}
        <span className="warning-txt">
          <span className= {getPopupClassByType()===" success" ? "headingmd-typography500" :"headingmd-typography700" }>
            {" "}
            {props.notificationTitle}
            {props.bodyMessage && <span className="bt-label bt-p">{props.bodyMessage}</span>}
            <span
              className="bt-a dismiss-txt"
              onClick={() => {
                if (!!props.callToActionText) {
                  handleClose();
                  props.callToAction();
                } else
                  handleClose();
                if (props.notificationTitle === "Sorry, something’s wrong with the system. Please try again.") {
                  Click({
                    i: 114,
                    m: "Dismiss",
                  });
                }
                else if (props.notificationTitle === "Safety check") {
                  Click({
                    i: 115,
                    m: "Dismiss",
                  });
                }
                else if (props.bodyMessage === "If you still don’t receive it, unfortunately we’re unable to verify you at this email address. Please try re-registering with a different one.") {
                  Click({
                    i: 118,
                    m: "Register here"
                  });
                }
                else if (props.notificationTitle === "The email is on its way. Please check your inbox.") {
                  Click({
                    i: 116,
                    m: "Dismiss"
                  });
                }
                else if (props.bodyMessage === "If for some reason you don’t receive it, we can only send it one more time.") {
                  Click({
                    i: 117,
                    m: "Dismiss"
                  });
                }
                else {
                  Click({
                    i: 113,
                    m: "Dismiss",
                  });
                }
              }}
            >
              {!!props.callToActionText ? props.callToActionText : "Dismiss"}<i className="bt-icon bt-icon-link-arrow"></i>
            </span>
          </span>
        </span>
      </div>
    </>
  );
};
