import React, { useState, useEffect } from 'react';
import "./Cart.css"
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import axios from 'axios';
import { format } from 'timeago.js';
import {StateHandler} from "../context/StoreContext"

function Cart() {
    const {cart, dispatch} = StateHandler()
    console.log(cart)

    const DeleteHandler=async(id)=>{
        try{
            const res = await axios.delete(`https://server.jerryroy.repl.co/api/cart/${id}`)
            console.log(res.data.allCartData )
            dispatch({ type: "GETDATA-SUCCESSFULL", PayLoad: res.data.allCartData })
        }catch(error){
            console.log(error.response?.data.message)
        }
    }

    return (
        <div className='cart'>
            <div className='cart-wrap'>
                <h2 className='cart-title'><LocalMallOutlinedIcon /> <span>Items in your Cart</span></h2>
                <div className='cart-Item'>
                    <div className='cart-Item-wrap'>
                        {
                            cart.map((item) => {
                                return (
                                    <div className='cart-main-item'>
                                        <div className='cart-left'>
                                            <img src={item.image} alt="" className='product-img' />
                                        </div>
                                        <div className='cart-right'>
                                            <h3>{item.title}</h3>
                                            <p>{item.disc}</p>
                                            <p>Quantity: <strong>{item.quantity}</strong> </p>
                                            <p className='price'>₹ {item.price}</p>
                                            <p className='upload-date'>{format(item.createdAt)}</p>
                                            <span className='remove-item' onClick={()=>DeleteHandler(item._id)}>Remove</span>
                                        </div>
                                    </div>

                                );
                            })
                        }
                    </div>
                    <div className='cart-Checkout'>
                        <div className="Checkout">
                            <p className="subtotal">subtotal(): <strong>₹ 2548</strong></p>
                            <button>proceed to checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cart;
