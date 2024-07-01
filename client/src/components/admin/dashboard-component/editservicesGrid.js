import React from 'react'
import './editservice.css'

function EditServicesGrid(){
    return(
        <>
        <div class="cart">
        <div class="cart-item">
            <div class="product">
                < img src="1.jpg" alt=""/>
                <span>Monthly Schedule</span>
            </div>
            <div class="qty">
                <button class="qty-btn">-</button>
                <input type="text" value="1"/>
                <button class="qty-btn">+</button>
            </div>
            <div class="price">$10</div>
            <div class="action"><button class="remove-btn">Remove</button></div>
        </div>
        <div class="cart-item">
            <div class="product">
                <img src="2.jpg" alt=""/>
                <span>Event Reminder</span>
            </div>
            <div class="qty">
                <button class="qty-btn">-</button>
                <input type="text" value="1"/>
                <button class="qty-btn">+</button>
            </div>
            <div class="price">$10</div>
            <div class="action"><button class="remove-btn">Remove</button></div>
        </div>
        <div class="cart-item">
            <div class="product">
                <img src="3.jpg" alt=""/>
                <span>Customize Routine</span>
            </div>
            <div class="qty">
                <button class="qty-btn">-</button>
                <input type="text" value="1"/>
                <button class="qty-btn">+</button>
            </div>
            <div class="price">$15</div>
            <div class="action"><button class="remove-btn">Remove</button></div>
        </div>
        </div>  
        </>
    )
}

export default EditServicesGrid