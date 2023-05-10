import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import {HomeComponent} from './Components/HomeComponent/HomeComponent';
import {SidebarComponent} from './Components/sidebarComponent/sidebar';
import {ChatComponent} from './Components/ChatComponent/ChatComponent';
import {useDispatch, useSelector} from "react-redux";
import {addNotificationID, addNotifications} from "./reduxFeatures/hasMessage";



const router = createBrowserRouter([{
    path: "/home", element: <div className={"margin-left-100 bg-light d-flex flex-row"}>
        <SidebarComponent/>
        <HomeComponent/>
    </div>
}, {
    path: "/", element: <div className={"margin-left-100 bg-light d-flex flex-row"}>
        <SidebarComponent/>
        <HomeComponent/>
    </div>
}, {
    path: "/chat", element: <div className={"margin-left-100 bg-light d-flex flex-row"}>
        <SidebarComponent/>
        <ChatComponent/>
    </div>
},
    {
        path: "/about-us", element: <div className={"margin-left-100 bg-light d-flex flex-row"}>
            <SidebarComponent/>
            <h1>About us</h1>
        </div>
    }

]);


function App() {

    const dispatch = useDispatch()
    const socket = useSelector(state => state.socket.socket)
    const userInfo = useSelector(state => state.userInfo)
    socket.on('addNotifications', (data) => {
        console.log("added",data)
        if (!data.exclusion.includes(userInfo.id)){
            console.log(data)
            dispatch(addNotificationID(data.id))
            dispatch(addNotifications("main"))
            dispatch(addNotifications(data.id))
        }
    })

    return (
            <RouterProvider router={router}/>
    );
}

export default App;
