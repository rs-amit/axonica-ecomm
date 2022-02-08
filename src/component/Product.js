import React, { useState, useEffect } from 'react';
import "./Product.css";
import { format } from 'timeago.js';
import axios from "axios"
import { StateHandler } from "../context/StoreContext"

function Product({ product, setProducts }) {

    const [quantity, setQuantity] = useState(0)
    const { cart, dispatch } = StateHandler()
    console.log(cart)

    //--------------------------increment number of data---------------------------
    const IncrementHandler = () => {
        setQuantity(quantity + 1)
    }
    const DecrementHandler = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    //----------------------------cart data------------------------------------------
    useEffect(() => {
        const cartHandler = async () => {
            const res = await axios.get("https://server.jerryroy.repl.co/api/cart");
            dispatch({ type: "GETDATA-SUCCESSFULL", PayLoad: res.data.cart })
        }
        cartHandler()
    }, [])

    //-------------------------------- Add to cart---------------------------------
    const AddtoCartHandler = async () => {
        try {
            const res = await axios.post('https://server.jerryroy.repl.co/api/cart', {
                productId: product._id,
                title: product.title,
                disc: product.disc,
                image: product.image,
                price: product.price,
                quantity: quantity
            })
            console.log(res.data.cart)
            dispatch({ type: "GETDATA-SUCCESSFULL", PayLoad: res.data.cart })

        } catch (error) {
            console.log(error.response?.data.message)
        }
    }

    // const postaddHandler = async () => {
    //     const res = await axios.post('https://server.jerryroy.repl.co/api/product', {
    //         title: "Godrej No. 1 Bathing Soap",
    //         image: "https://m.media-amazon.com/images/I/61Z5d+NWSVL._SL1200_.jpg",
    //         disc: "Godrej No. 1 Bathing Soap Lime & Aloe Vera – Grade 1 Soap & Long-lasting Fragrance, Combo Pack of 4 (150g each)",
    //         price: "48"
    //     })
    //     console.log(res.data)
    // }

    //--------------------------------------- remove----------------------------------

    const RemoveHandler = async (id) => {
        try {
            const res = await axios.delete(`https://server.jerryroy.repl.co/api/product/${id}`)
            setProducts(res.data.allProductData)
        } catch (error) {
            console.log(error.response?.data.message)
        }
    }

    return (
        <>
            {/* <button onClick={postaddHandler}>add</button> */}
            <div className='products'>

                <div className='product-left'>
                    <img src={product.image} alt="" className='product-img' />
                </div>
                <div className='product-right'>
                    <h3>{product.title}</h3>
                    <p>{product.disc}</p>
                    <p className='price'>₹ {product.price}</p>
                    <p className='upload-date'>{format(product.createdAt)}</p>
                    <div>
                        <button onClick={IncrementHandler}>+</button>
                        <span>{quantity}</span>
                        <button onClick={DecrementHandler}>-</button>
                    </div>
                    <div className='product-btn'>
                        <button className='addbtn' onClick={AddtoCartHandler}>Add To Cart</button>
                        <button className='removebtn' onClick={() => RemoveHandler(product._id)}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
