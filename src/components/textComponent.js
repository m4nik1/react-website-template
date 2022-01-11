import React from "react";

const TextComponent = props => {
    const someText = "Hello world again";
    return(
        <div>
            <p>
                {someText}
            </p>
            <p>
                {props.dumbText}
            </p>
            {/* <button onClick={() => console.log("Button was pressed")}>Press here!</button> */}
        </div>
    );
}


export default TextComponent;