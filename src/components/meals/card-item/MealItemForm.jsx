import React, {useRef, useState} from 'react';
import Input from '../../layout/Input';

import Classes from './MealItem.module.css';

function MealItemForm(props){
    const [isAmountValid, setIsAmountalid] = useState(true);
    const amountInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if( enteredAmount.trim().lentgh === 0 || enteredAmountNumber < 1 ){
            setIsAmountalid( false );
            return;
        }

        props.onAddToCart( enteredAmountNumber );

    }

    return(
        <form className={Classes.form} onSubmit={handleSubmit}>
            <Input label='Enter Amount' ref ={amountInputRef} input={ {
                id: 'amount',
                type: 'number',
                min: '1',
                max: '15',
                step: '1',
                defaultValue: '1'
            } } />
            <button>+ Add</button>
            { !isAmountValid && <p>The amount is not valid!</p> }
        </form>
    )
}

export default MealItemForm;