import React from 'react';

var rand = (Math.random() * 40) - 20;

const Card = ({ title, body, bodyClass }) => {
    return (
        <>
            <div className="card-container">
                <div className="empty-box" style={{ transform: 'rotate(-10deg)'}}>
                    {title}
                </div>
                <div className="card-text">
                    <div className={bodyClass}>{ body }</div> 
                </div>
            </div>
        </>
    )
}

export default Card;