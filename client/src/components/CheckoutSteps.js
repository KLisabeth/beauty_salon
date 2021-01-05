import React from 'react'

function CheckoutSteps(props) {
    return (
        <div className="checkout-steps">
            <div className={props.step1 ? 'active' : ''}>1. Input your info</div>
            <div className={props.step2 ? 'active' : ''}>2. Pick employee</div>
            <div className={props.step3 ? 'active' : ''}>3. Choose time</div>
        </div>
    )
}

export default CheckoutSteps
