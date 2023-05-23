import React from 'react'
import { NavLink } from 'react-router-dom'
import cartImageImage from "../../assets/img/empty-cart.png"

const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Cart empty 😕</h2>
            <p>
                Chances are, you haven't ordered a pizza yet.
                <br />
                To order a pizza, go to the home page.
            </p>
            <img src={cartImageImage} alt="Empty cart" />
            <NavLink to="/" className="button button--black">
                <span>Go back</span>
            </NavLink>
        </div>
    )
}

export default CartEmpty