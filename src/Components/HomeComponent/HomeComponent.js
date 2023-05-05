
import {useDispatch, useSelector} from "react-redux";
import {InfoBox} from "../InfoBox/InfoBox";
import {addNotifications} from "../../reduxFeatures/hasMessage";


export function HomeComponent() {
    const dispatch = useDispatch();
    const notifiactions = useSelector((state) => state.notificationHash.main);

    return (<div className={"container-fluid p-5 vh-100"}>
            <div className={"d-flex flex-row"}>
                <div className={"d-flex flex-column w-75"}>
                    <InfoBox className={"mb-5"}
                             style={{width: "100%", height: "75px", backgroundColor: 'rgba(0,40,126,0.69)'}}>
                    </InfoBox>
                    <InfoBox className={"mb-5"}
                             style={{width: "100%", height: "75px", backgroundColor: 'rgba(0,40,126,0.69)'}}>
                    </InfoBox>
                    <InfoBox className={"mb-5"}
                             style={{width: "100%", height: "75px", backgroundColor: 'rgba(0,40,126,0.69)'}}>
                    </InfoBox>
                    <div className={"d-flex flex-row mb-4 justify-content-between w-100"}>
                        <InfoBox className={"d-flex flex-row"}
                                 style={{width: "30%", height: "200px", backgroundColor: 'rgba(44,253,14,0.41)'}}>
                            <div className={"fas text-dark fa-anchor text-dark fa-5x"}></div>
                        </InfoBox>
                        <InfoBox className={"d-flex flex-row"}
                                 style={{width: "30%", height: "200px", backgroundColor: 'rgba(180,0,255,0.41)'}}>
                            <div className={"fas text-dark fa-user-alt text-dark fa-5x"}></div>
                        </InfoBox>
                        <InfoBox className={"d-flex flex-row"}
                                 style={{width: "30%", height: "200px", backgroundColor: 'rgba(255,0,0,0.41)'}}>
                            <div className={"fas text-dark fa-icons text-dark fa-5x"}></div>
                        </InfoBox>
                    </div>
                    <div className={"d-flex flex-row justify-content-between w-100"}>
                        <InfoBox className={"d-flex flex-row"}
                                 style={{width: "30%", height: "200px", backgroundColor: 'rgba(255,162,0,0.41)'}}>
                            <div className={"fas text-dark fa-vials text-dark fa-5x"}></div>
                        </InfoBox>
                        <InfoBox className={"d-flex flex-row"}
                                 style={{width: "30%", height: "200px", backgroundColor: 'rgba(230,255,0,0.41)'}}>
                            <div className={"fas text-dark fa-address-book text-dark fa-5x"}></div>
                        </InfoBox>
                        <InfoBox className={"d-flex flex-row"} onClick={() => {
                            dispatch(addNotifications("chaim"))
                            dispatch(addNotifications("main"))
                        }}
                                 style={{width: "30%", height: "200px", backgroundColor: 'rgba(3,0,255,0.41)'}}>
                            <div className={"fas text-dark fa-lightbulb text-dark fa-5x"}></div>
                        </InfoBox>
                    </div>
                </div>
                <InfoBox className={"align-items-start mx-auto p-4 justify-content-start d-flex flex-column"}
                         style={{width: "20%", height: '', backgroundColor: 'rgb(200,200,200)'}}>
                    <h4 className={"text-center mb-5"}>Welcome to the website</h4>
                    <p className={"fw-light fs-5"}>This will be a paragraph explaining something about the website. It
                        will also have maybe a button at the bottom of it that links to a documentation.</p>
                    <p className={"fw-light fs-5"}>This will be a paragraph explaining something about the website. It
                        will also have maybe a button at the bottom of it that links to a documentation.</p>
                    <p className={"fw-light fs-5"}>This will be a paragraph explaining something about the website. It
                        will also have maybe a button at the bottom of it that links to a documentation.</p>
                </InfoBox>
            </div>
        </div>)
}