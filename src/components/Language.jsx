function Language(props){
    return (
        
        <p className={`language rounded p-2 ${props.isDead ? "dead" : ""}`} style={{backgroundColor: props.backgroundColor, color:props.color}} >{props.name}</p>
    )
}

export default Language;