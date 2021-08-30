import React  from 'react';
import '../styles/product.css'
import { Link } from 'react-router-dom';
// import Quantity from './Quantity';

function Cart(props) {

  const {cartItems,addToCart,removeFromCart,removeAll} = props;
  const itemsPrice = cartItems.reduce((a,c)=> a+c.data.price * c.qty,0);
  // const taxPrice =itemsPrice * 0.21;
  


    return (
      
      <div className="flex flex-row justify-center flex-wrap ">
        {cartItems.length === 0 && <div>Cart is empty</div>}


        {cartItems.map((item,id) =>

        <div className="w-full px-5">
            <div key={id}  >
            <div className="flex flex-row justify-between items-center flex-wrap md:flex flex-row justify-center ">
              <div className="flex flex-row justify-start items-center  " >
                 <img className="pochette my-8 mr-4" src={item.data.vignette} alt="exemple vignette"></img>
                  <div className="artname" ><h2 className="flex self-start font-bold  text-xl mb-2">{item.data.name}</h2>
                  <h3  className="flex self-start font-bold text-l mb-4 ">{item.data.artist}</h3>
                  </div>
              </div>
              <div>
                    <button onClick={()=>removeAll(item)} className="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    </div>
                </div>

                </div>
                <div className="flex w-full justify-between pl-28 mb-2 ">
                <div className="flex justify-start">
                <button  onClick={()=>removeFromCart(item)} className="btn-quantity">-</button>
                  <div className="flex items-center px-2">{item.qty} </div>
                  <button  onClick={() => addToCart(item)} className="btn-quantity">+</button>
                </div>
                  <p className="price font-bold text-xl">{item.data.price } €</p>
              </div>
  
            
            
            
          </div>
          
        
        
      )}
      <div className="label-cat mt-4 w-full flex px-6 justify-between items-center">
              <h3 className="font-bold text-xl ">TOTAL</h3>
              <p className="price font-bold text-xl">{itemsPrice }€</p>
              </div>
      
      <div className="">
                <button className="shop-btn w-full font-bold py-2 px-4 my-4 rounded">
                  <Link to ="/">CONTINUE YOUR SHOPPING</Link></button>
                <button className="check-btn  w-full text-white font-bold py-2 px-4 rounded">
                  <Link to="/checkout">CHECKOUT</Link>
                  </button>
          </div>
      </div>
    )
  }

  
  export default Cart