import './InfoBox.css';
export function InfoBox(props){
    return(
        <div className={"infoBox "+props.className} style={{width:props.style.width, height:props.style.height, backgroundColor:props.style.backgroundColor}} onClick={props.onClick}>
            {props.children}
        </div>
    )
}