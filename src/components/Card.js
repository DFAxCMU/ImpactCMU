import React from 'react';

const Card = ({ title, body, bodyClass }) => {
    return (
        <>
            <div className="card-container">
                <div className="empty-box">
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