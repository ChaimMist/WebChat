import {useState, useEffect} from 'react';
import {ProfileComponent} from '../profileComponent/profileIcon'
import {useSelector} from "react-redux";
// import {addNotifications, addNotificationID} from "../../reduxFeatures/hasMessage";

import '@fortawesome/fontawesome-free/js/fontawesome';
import './sidebar.css'
import {NavLink} from "react-router-dom";


export function SidebarComponent() {
    const notifications= useSelector((state) => state.notificationHash.main);
    // const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({name: "Profile", url: "https://chedvata.com/assets/profile.svg"});
    useEffect(() => {

        console.log(notifications)


        document.getElementById("sidebar").addEventListener("mouseenter", function () {
            setActive(true);
        });
        document.getElementById("sidebar").addEventListener("mouseleave", function () {
            setActive(false);
        });

        if (localStorage.getItem('token') !== null) {
            setLoggedIn(true);
            setData(localStorage.getItem('token'));
        }
    }, []);
    if (active) {
        return (
            <div id={"sidebar"} className={"sidebar sticky-top"}>
                <div className={"d-flex flex-column p-3 h-100 justify-content-between"}>
                    <div className={"d-flex flex-column"}>
                        <NavLink to={"/home"} className={"sidebarItem text-nowrap"} >
                            <h5>Home</h5>
                        </NavLink>

                        <NavLink to={"/chat"} className={" sidebarItem text-nowrap d-flex flex-row justify-content-between align-items-center"}>
                            <h5>Chat</h5>
                            <div className={"mb-1 rounded-circle bg-danger flex-column d-flex justify-content-center text-center text-white notification  width-height-25px "+(notifications>0?"":" d-none")}>
                                <div>{notifications}</div>
                            </div>
                        </NavLink>
                        <NavLink to={"/about-us"} className={"sidebarItem text-nowrap"}>
                            <h5>About us</h5>
                        </NavLink>
                        <NavLink to={"/log-in"} className={"sidebarItem text-nowrap"}>
                            <h5>Log Out</h5>
                        </NavLink>
                    </div>
                    <div className="profileIcon">
                        <ProfileComponent url={data.url} name={data.name} active={true}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id={"sidebar"} className="sidebar sidebar-inactive">
                <div className={"d-flex flex-column p-2  h-100 justify-content-between"}>
                    <div className={"d-flex flex-column"}>
                        <i className={"sidebarItem mx-auto fas fa-2x fa-home"}></i>
                        <div className={"sidebarItem mx-auto fas fa-2x fa-comment d-flex flex-row text-center align-items-center"}>
                            <div className={"rounded-circle bg-danger text-center d-flex text-white flex-column justify-content-center notification "+(notifications>0?"":" d-none")}>
                                <div>{notifications}</div>
                            </div>
                        </div>
                        <i className={"sidebarItem mx-auto fas fa-2x fa-address-book"}></i>
                        <i className={"sidebarItem mx-auto fas fa-2x fa-sign-out-alt fa-rotate-180"}></i>
                    </div>
                    <div className="profileIcon mx-auto">
                        <ProfileComponent url={data.url} active={false}/>
                    </div>
                </div>
            </div>
        )
    }
}