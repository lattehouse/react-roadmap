const name = "Jack"

function displayMessage() {
    return "Rose"
}

function Hello(props){
    // return <h1>Hello {name} And {displayMessage()}</h1>
    return(
        <div>
            <h2>Hello {props.name}</h2>
        </div>
    )
}

export default Hello