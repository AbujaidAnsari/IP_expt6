import React from "react";
function Info({name,division}) {
    
    return (
        <div>
            <h1>My name is {name}</h1>
            <h1>I am from {division}</h1>
        </div>
    );
    // Info.defaultProps = {
    //     name: "Abujaid",
    //     division: "D15B"
    // }
}

export default Info
