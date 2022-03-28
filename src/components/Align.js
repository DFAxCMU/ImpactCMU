import React from 'react'

const Align = ({left, right}) => {
    return(
        <div className="align">
            <div className="left">
                <h3>{ left }</h3>
            </div>
            <div className="right">
                <h4>{ formatText(right) }</h4>
            </div>
        </div>
    )
}

function formatText(str) {
    if (!str) return str;

    // replace \n in the string with <br />
    let formatted = [];
    const lines = str.split("\\n");

    for (let line of lines) {
        formatted.push(line);
        formatted.push(<br />);

    }
    return formatted;
}

export default Align;