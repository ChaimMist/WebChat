import {useSelector, useDispatch} from "react-redux";
import {removeNotifications} from "../../../../reduxFeatures/hasMessage";
import './Contact.css'

export function Contact(props) {
    const notifications = useSelector(state => state.notificationHash[props.contact.id])
    const dispatch = useDispatch()
    // dispatch(removeNotifications(props.contact.id))

    return (
        <div className={" contact-box d-flex flex-row border  mt-1 shadow-sm p-2"}  onClick={() => {
            dispatch(removeNotifications(["main", notifications]))
            dispatch(removeNotifications([props.contact.id, notifications]))
            }
        }>
            <div className={"d-flex flex-row w-70px"}>
                <img src={"https://chedvata.com/assets/profile.svg"} width={'50'} alt={"img"}/>
                <div style={{right:"12px"}} className={"mb-1 position-relative  rounded-circle bg-danger flex-column d-flex justify-content-center text-center text-white notification   "+(notifications>0?"":" d-none")}>
                    <div>{notifications}</div>
                </div>
            </div>
            <div className={"p-2 d-flex flex-column align-items-center"}>
                <p>{props.contact.name}</p>
                <div className={"text-secondary fw-light contact-subtext position-relative"}>{props.contact.phone}</div>

            </div>
        </div>
    );
}