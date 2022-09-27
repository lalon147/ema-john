
import React from 'react';
import "./Product.css"


const Product = (props) => {
 const {name,img,seller,ratings,price}=props.product
 const {handleAddToCart}=props
    return (
        <div className='product'>
           <img src={img} alt=""></img>
           <div className="product-info">
           <p className='product-name'>{name}</p>
           <p>Price:{price}$</p>
           <p><small>Seller:{seller}</small></p>
           <p><small>Ratings:{ratings}</small></p>
           </div>
           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart
          </button>
           
        </div>
    );
};

export default Product;<h1>This is Product</h1>