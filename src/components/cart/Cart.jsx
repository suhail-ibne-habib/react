import React, {useContext} from 'react';

import Classes from './Cart.module.css';
import Modal from '../layout/Modal';
import Ctx from "../../store/cart-contex";
import CartItem from './CartItem';

function Cart(props){
    const cartCtx = useContext( Ctx );
    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const cartItemRemoveHandler = (item)=>{

    }

    const cartItemAddHandler = item =>{

    }

    return <Modal onClose={props.onClose}>
        <ul className={Classes['cart-items']}>
            {
                cartCtx.items.map( item => (

                    <CartItem
                        key={item.id} 
                        name={item.name} 
                        price={item.price} 
                        amount={item.amount}
                        onRemove={()=> cartItemRemoveHandler(item.id) }  
                        onAdd={ ()=> cartItemAddHandler(item.id) }
                        />
                    
                ) )
            }
        </ul>
        <div className={Classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={Classes.actions}>
            <button className={Classes['button-alt']} onClick={props.onClose}>Close</button>
            { totalAmount > 0 &&  <button className={Classes.button}>Order</button> }
        </div>
    </Modal>
}

export default Cart;