import './profileIcon.css'

export function ProfileComponent (props) {
    if (props.active === true){
        return (
            <div className={"profileIconWrapper d-flex  flex-row text-center text-align-center" }>
                <img className={"userIcon"} width='50px' src={'https://chedvata.com/assets/profile.svg'} alt={"Failed to load icon"}/>
                <div className={"text-light my-auto ms-2"}>{props.name}</div>
            </div>
        )
    }
    else {
        return(
            <div className={"profileIconWrapper"}>
                <img className={"userIcon"} width='50px' src={props.url} alt={"Failed to load icon"}/>
            </div>
        )
    }
}