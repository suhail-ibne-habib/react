import { useReducer } from "react";
import CartContext from "./cart-contex";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if( action.type === 'Add' ){
        const updatedItems = state.items.concat( action.item );
        const updatedTotaleAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotaleAmount
        }

    }
    
    return defaultCartState;

}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer( cartReducer, defaultCartState );

    const addItemToCartHandler = item => {
        dispatchCartAction( { type: 'Add', item: item } );
    };

    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;