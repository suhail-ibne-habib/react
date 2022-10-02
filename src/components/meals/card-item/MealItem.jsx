import React, {useContext} from 'react';

import Classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import ctx from '../../../store/cart-contex';

function MealItem(props){
    const cartCtx = useContext( ctx );
    const price = `$${props.price.toFixed(2)}`;

    const handleAddToCart = amount =>  {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }

    return(
        <li className={Classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={Classes.description}>{props.description}</div>
                <div className={Classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={handleAddToCart}/>
            </div>
        </li>
    )
}

export default MealItem;