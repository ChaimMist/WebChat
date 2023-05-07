import {useState} from "react";
import {useEffect} from "react";
import {Contact} from "./Contact/Contact";
import {useDispatch, useSelector} from "react-redux";
import {addNotificationID} from "../../../reduxFeatures/hasMessage";
import {dispatchEvent} from "../../../reduxFeatures/Socket";
import './ContactsComponenet.css'
import {v4 as uuidv4} from 'uuid';


let allContacts = []

export function ContactsComponent() {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.userInfo)
    const socket = useSelector(state => state.socket.socket)
    const [contacts, setContacts] = useState(allContacts)
    const [searchedContacts, setSearchedContacts] = useState([{name: "No Results", phone: ""}])
    const [addedUsers, setAddedUsers] = useState([])

    let loader = <div className={"d-flex justify-content-center"}>
        <div className={"spinner-border"} role={"status"}>
            <span className={"sr-only"}></span>
        </div>
    </div>

    useEffect(() => {
        document.getElementById('searchContact').addEventListener('change', (e) => {
            let value = e.target.value
            if (value == "") {
                setSearchedContacts([{name: "No Results", phone: ""}])
                return
            }
            console.log("searching", value)
            setSearchedContacts([])
            fetch('/get-contact', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({input: value}),
            },).then((res) => res.json())
                .then((data) => {
                    setSearchedContacts(data)
                })
        })
        document.getElementById('contactsInput').addEventListener('input', (e) => {
            let value = e.target.value
            let contacts = allContacts.filter((contact) => {
                return contact.name.toLowerCase().includes(value.toLowerCase()) || contact.phone.includes(value)
            })
            if (contacts.length === 0) {
                contacts = [{name: "No Results", phone: ""}]
            }
            setContacts(contacts)
        });

        fetch('/get-chats', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({id: userInfo.id}),
        })
            .then((res) => res.json())
            .then((data) => {
                allContacts = data
                for (const item of data) {
                    dispatch(addNotificationID(item.id))

                    dispatch(dispatchEvent(['join', item.id]))
                }
                setContacts(data)
            })
    }, [dispatch, userInfo.id])

    return (<div className={"bg-light contactsContainer overflow-auto "}>
            <div className={"sticky-top bg-light"}>
                <div
                    className={"d-flex flex-row justify-content-between align-items-center p-2 border-bottom "}>
                    <h6 className={"text-uppercase"}>Contacts</h6>
                    <span><i id={"addChat"} data-bs-toggle="modal" data-bs-target="#exampleModal"
                             className={"fas fa-plus-circle fa-2x hover-scale"}></i></span>
                </div>
                <div className={"form-group p-2 "}>
                    <input type={"text"} id={"contactsInput"} placeholder={"Search or start new chat"}
                           className={"form-control"}/>
                </div>
            </div>
            <div className={"contacts p-2"}>
                {contacts[0] ? contacts.map((contact, index) => {
                    if (contact.name == "No Results") return (
                        <div className={"w-100 d-flex flex-row justify-content-center"}>No results.</div>)

                    return (<Contact key={index} chat={contact}/>)
                }) : loader}
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className={"form-group"}>
                                <label htmlFor={"chatNameInput"}>Chat Name</label>
                                <input type={"text"} id={"chatNameInput"} className={"form-control"}
                                       placeholder={"user name or number"}/>
                                <label htmlFor={"searchContact"}>Name or number</label>
                                <input type={"text"} id={"searchContact"} className={"form-control"}
                                       placeholder={"user name or number"}/>
                                <hr/>
                                <label htmlFor={"contacts"}>Contacts</label>
                                <div className={"overflow-auto"} style={{height: "300px"}}>
                                    {searchedContacts[0] ? searchedContacts.map((contact, index) => {
                                        if (contact.name === "No Results") return (
                                            <div className={"w-100 d-flex flex-row justify-content-center"}>No
                                                results.</div>)

                                        return (
                                            <div key={index}
                                                 className={"d-flex flex-row justify-content-between align-items-center"}>
                                                <div className={"d-flex flex-row"}>
                                                    <img src={contact.image} width={'50'}
                                                         alt={"img"}/>
                                                    <div className={"p-2 d-flex flex-column align-items-center"}>
                                                        <p>{contact.name}</p>
                                                        <div
                                                            className={"text-secondary fw-light contact-subtext position-relative"}>{contact.phone}</div>
                                                    </div>
                                                </div>
                                                <div className={"d-flex flex-row"}>
                                                    <button
                                                        className={"btn btn-outline-primary " + (addedUsers.id == contact.id ? "disabled" : "")}
                                                        onClick={() => {
                                                            setAddedUsers([...addedUsers, contact])
                                                        }}
                                                    >Add
                                                    </button>
                                                </div>
                                            </div>)
                                    }) : loader}
                                </div>
                                <div className={"addedUsers"}>
                                    <hr/>
                                    <label htmlFor={"addedUsers"}>Added Users</label>
                                    <div className={"overflow-auto"} style={{height: "150px"}}>
                                        {addedUsers[0] ? addedUsers.map((contact, index) => {
                                            return (<div key={index}
                                                         className={"d-flex flex-row justify-content-between align-items-center"}>
                                                <div className={"d-flex flex-row"}>
                                                    <img src={contact.image} width={'50'}
                                                         alt={"img"}/>
                                                    <div className={"p-2 d-flex flex-column align-items-center"}>
                                                        <p>{contact.name}</p>
                                                        <div
                                                            className={"text-secondary fw-light contact-subtext position-relative"}>{contact.phone}</div>
                                                    </div>
                                                </div>
                                                <div className={"d-flex flex-row"}>
                                                    <button className={"btn btn-outline-danger"} onClick={() => {
                                                        setAddedUsers(addedUsers.filter((user) => {
                                                            return user.id !== contact.id
                                                        }))
                                                    }}>Remove
                                                    </button>
                                                </div>
                                            </div>)

                                        }) : "No users added."}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={
                                                () => {
                                                    let uuid = uuidv4()
                                                    fetch('/create-chat', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            userName: userInfo.name,
                                                            userImage: userInfo.image,
                                                            userID: userInfo.id,
                                                            chatName: document.getElementById('chatNameInput').value,
                                                            participants: addedUsers,
                                                            image: "https://chedvata.com/assets/profile.svg",
                                                            chatID: uuid,
                                                        }),
                                                    }).then(() => {
                                                        setContacts([...contacts, {
                                                            name: document.getElementById('chatNameInput').value,
                                                            image: "https://chedvata.com/assets/profile.svg",
                                                            id: uuid
                                                        }])
                                                        dispatch(dispatchEvent(['join', uuid]))
                                                    })
                                                }
                                            }
                                    >Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}