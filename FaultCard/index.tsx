import { useEffect, useState } from 'react';
import { PrimaryButton } from '../';
import DateService from '../../services/DateFormatter';
import './style.scss';
import { Click } from "./../../analytics/analytics";
import { connect } from 'react-redux';
import { FaultModel } from '../../app/redux/api/Models/RepairCentreModel';
import repairCentreJourney from '../../app/redux/api/Services/apiService';
interface fault {
    id: string;
    ProductName: string;
    ServiceId: string;
    ReportedOn: string;
    FaultReference: string;
    Status: string;
    isOpen: boolean;
    contactId: string;
}
interface Props {
    selectedGroup: any;
    faultItem: fault;
    config: any;
}

const FaultCard = (props: Props) => {
    const [faultModelResponse, setfaultModelResponse] = useState<any>({});
    function capitalizeFirstLetter(el: string) {
        return el.charAt(0).toUpperCase() + el.slice(1);
    }

    const getFaultModel = (faultItem: fault, selectedGroup: any) => {
        let { config } = props.config;
        let trackfaultFlag = config.IsEnableDCPTrackFaultPage;
        if (trackfaultFlag) {
            repairCentreJourney.getFaultModel(faultItem.FaultReference, selectedGroup.CugId).then((res: FaultModel) => {
                setfaultModelResponse(res);
            })
                .catch((error) => {
                    console.log("response", error);
                })
        } else {
            window.open(`/FaultManagement/Home.htm#!/FaultDetails?Faultid=${faultItem.FaultReference}`, '_blank');

        }
        Click({ i: 400, m: `Track fault-${faultItem.Status}` });
    }

    useEffect(() => {
        if (faultModelResponse.EncodedBAC && faultModelResponse.EncodedBAC !== undefined) {
            let { config } = props.config;
            let DCPDOmainUrl = config.DCPTrackFaultPageURL;
            let DCPTrackFaultPageURL = `${DCPDOmainUrl}?faultId=${faultModelResponse.FaultId}&productCode=${faultModelResponse.ProductCode}&encodedBAC=${faultModelResponse.EncodedBAC}&encodedBACTTID=${faultModelResponse.EncodedBACTTID}&isUserAuthenticated=${faultModelResponse.IsUserAuthenticated}&encodedLoginStatus=${faultModelResponse.EncodedLoginStatus}&Status=${faultModelResponse.Status}&SubStatus=${faultModelResponse.SubStatus}&isCVServiceID=${faultModelResponse.IsCVServiceID}`;
            window.open(DCPTrackFaultPageURL, '_blank');

        }
    }, [faultModelResponse])

    // const redirectToFaultPage = (faultItem: fault, selectedGroup: any) => {
    //     let trackfaultFlag = props.config.IsEnableDCPTrackFaultPage;
    //     if(trackfaultFlag){
    //         repairCentreJourney.getFaultModel(faultItem.FaultReference,selectedGroup.CugId).then((res) => {
    //             setCheckFaultRef(res);
    //         })
    //             .catch((error) => {
    //                 console.log("response", error);
    //             })
    //     }
    //     console.log("trackfaultFlag",trackfaultFlag);
    //     window.open(`/FaultManagement/Home.htm#!/FaultDetails?Faultid=${faultItem.FaultReference}`, '_blank');
    //     Click({ i: 400, m: `Track fault-${faultItem.Status}` });
    // }
    return (
        <>
            <div className="bt-fault-card" >
                <div className="card-header pos-r">
                    <span className="card-title">Fault {props.faultItem.FaultReference}</span>
                    <span className="card-icon-wrp">
                        <i className="ma-icon ma-fault" ></i>
                    </span>
                </div>
                <span className="header-divider"></span>
                <div className="card-body">
                    <div className={`stage-btn ${props.faultItem.Status.replace(/fault/ig, '').trim()}`}>{capitalizeFirstLetter(props.faultItem.Status.replace(/fault/ig, '').trim())}</div>
                    <div className="detail-wrp">
                        <span className="bt-label">Product type</span>
                        <span className="desc">{props.faultItem.ProductName.replace(/fault/ig, '')} </span>
                    </div>
                    <div className="detail-wrp">
                        <span className="bt-label">Fault reported</span>
                        <span className="desc">{DateService.getDate((props.faultItem.ReportedOn))}</span>
                    </div>
                    <PrimaryButton onClick={() => getFaultModel(props.faultItem, props.selectedGroup)}>View details</PrimaryButton>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state: any) => {
    return {


        config: state.getConfigAttributes
    }
}


export default connect(mapStateToProps)(FaultCard);


