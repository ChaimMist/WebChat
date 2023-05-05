import {ContactsComponent} from './ContactsComponent/ContactsComponent'
import {MessagesComponent} from './MessagesComponent/MessagesComponent'

export function ChatComponent(){
    return(
        <div className={"d-flex flex-row w-100"}>
            <ContactsComponent/>
            <MessagesComponent/>
        </div>
    )
}