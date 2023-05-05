import {useState} from "react";
import {useEffect} from "react";
import {Contact} from "./Contact/Contact";
import './ContactsComponenet.css'



let allContacts = [
    {name: "Chaim Mistriel", phone: "0538815816"}, {
    id: "chaim",
    name: "Chaim Mistriel",
    phone: "0538815816"
}, {name: "Chaim Mistriel", phone: "0538815816"}, {
    name: "Chaim Mistriel",
    phone: "0538815816"
}, {name: "Chaim Mistriel", phone: "0538815816"}, {
    name: "Chaim Mistriel",
    phone: "0538815816"
}, {name: "Chaim Mistriel", phone: "0538815816"}, {
    name: "Chaim Mistriel",
    phone: "0538815816"
}, {name: "Chaim Mistriel", phone: "0538815816"}, {
    name: "Chaim Mistriel",
    phone: "0538815816"
}, {name: "Chaim Mistriel", phone: "0538815816"}, {
    name: "Chaim Mistriel",
    phone: "0538815816"
}, {name: "Chaim Mistriel", phone: "0538815816"}, {
    name: "Chaim Mistriel",
    phone: "0538815816"
}, {name: "Dovid Mistriel", phone: "0538815816"}]
export function ContactsComponent() {
    const [contacts, setContacts] = useState(allContacts)
    let loader = <div className={"d-flex justify-content-center"}>
        <div className={"spinner-border"} role={"status"}>
            <span className={"sr-only"}></span>
        </div>
    </div>

    useEffect(() => {
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

        //     fetch('/api/get-contacts')
        //         .then((res) => res.json())
        //         .then((data) => {
        //             setContacts(data)
        //         })
        }, [])

    return (
        <div className={"bg-light contactsContainer  overflow-auto "}>
            <div className={"sticky-top bg-light"}>
                <div
                    className={"d-flex flex-row justify-content-between align-items-center p-2 border-bottom "}>
                    <h6 className={"text-uppercase"}>Contacts</h6>
                    <span><i className={"fas fa-plus-circle fa-2x hover-scale"}></i></span>
                </div>
                <div className={"form-group p-2 "}>
                    <input type={"text"} id={"contactsInput"} placeholder={"Search or start new chat"} className={"form-control"}/>
                </div>
            </div>
            <div className={"contacts p-2"}>
                {contacts[0] ? contacts.map((contact,index) => {
                        return (
                            <Contact key={index} contact={contact}/>
                        )
                    }
                ) : loader}
            </div>
        </div>
    )

}