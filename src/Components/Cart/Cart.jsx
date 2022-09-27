import React, { useState } from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart=props.cart
    let totalPrice=0;
    let shipping=0;
    let quantity;
    for(const item of cart){
       if(item.quantity>=1){
        quantity=item.quantity
       }
       else{
        quantity=1
       }
       console.log(item.quantity)
       totalPrice=totalPrice+(item.price*quantity)
       shipping=shipping+item.shipping*quantity
    }
    const tax=parseFloat((totalPrice*0.1).toFixed(2));
    const grandTotal=(tax+shipping+totalPrice)
   
    
    return (
        <div className='cart'>
         <h1>Order Summary</h1>
         <h2>Selected Items:{cart.length}</h2>
         <p>Total Price:${totalPrice}</p>
         <p>Total Shipping Charge:{shipping}</p>
         <p>Tax:{tax}</p>
         <h2>Grand Total:{grandTotal}</h2> 
        </div>
    );
};

export default Cart;