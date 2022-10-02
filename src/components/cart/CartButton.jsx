import React from 'react';
import CartIcon from './CartIcon';

import {useContext} from 'react';

import CartClasses from './CartButton.module.css';
import CartContext from '../../store/cart-contex';

function CartButton(props){

    const cartCtx = useContext( CartContext );

    const numberOfCartItems = cartCtx.items.reduce( (curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return(
        <button className={CartClasses.button} onClick={props.onShowCart}>
            <span className={CartClasses.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={CartClasses.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;