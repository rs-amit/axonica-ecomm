import React from 'react';
import "./Header.css";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import {StateHandler} from "../context/StoreContext"


function Header() {
    const {cart, dispatch} = StateHandler()
    console.log(cart)
    return (
        <div className='header'>
            <div className='header-wrap'>
                <div className='header-logo'>
                    <Link to="/">
                        <h2>Aexon<span>IC</span></h2>
                    </Link>
                </div>
                <div className='header-nav'>
                    <Link to="/cart">
                        <span><ShoppingCartOutlinedIcon /> <span className='counter'>{cart.length}</span></span>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Header;
