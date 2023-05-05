import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import {HomeComponent} from './Components/HomeComponent/HomeComponent';
import {SidebarComponent} from './Components/sidebarComponent/sidebar';
import {ChatComponent} from './Components/ChatComponent/ChatComponent';


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
    return (
            <RouterProvider router={router}/>
    );
}

export default App;
