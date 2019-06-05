import React from 'react';

function planSubmit() {
    console.log('click')
}

function Plan(props) {
    return <div>
        <div className="name">{props.name}</div>
        <div className="price">12 Month Subscription<br></br>${props.price}</div>
        <div className="credit-container">
            Include Certificate
            <div className="credit">{props.credits.do} CME credits for DO</div>
            <div className="credit">{props.credits.pa} CME credits for PA</div>
            <div className="credit">{props.credits.nurse} CNE credits for Nurses</div>
        </div>
        <button className="select-btn" onClick={planSubmit}>Select</button>
    </div>
}

export default Plan;