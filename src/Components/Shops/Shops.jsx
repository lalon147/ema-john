import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shops.css"

const Shops = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then((res)=>res.json())
        .then(data=>{
            setProducts(data)
        })
        // console.log("products  end")
    },[])
    useEffect(()=>{
       const storedCart= getStoredCart();
       const savedCart=[]
      
       for(const id in storedCart){
        
        const addedProduct=products.find(product=>product.id===id)
        if(addedProduct){
             addedProduct.quantity=storedCart[id]
             savedCart.push(addedProduct);
             setCart(savedCart)
            //  console.log(savedCart);
             
        }
       }
       
    },[products]);
    
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id)
        
      
    }
  
    return (
        <div className='shop-container'>
         <div className="products">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >

                    </Product>)
                }
         </div>
         <div className="order-summary">
        
         <Cart cart={cart}></Cart>
         </div>   
        </div>
    );
};

export default Shops;