import React from 'react';
import Classes from './Header.Module.css';

import headerImg from '../assets/meals.jpg';
import CartButton from '../cart/CartButton';

function Header(props){

    return (
        <>
            <header className={Classes.header}>
                <h1>ReactMeals</h1>
                <CartButton onShowCart={props.onShowCart} />
            </header>
            <div className={Classes['main-image']}>
                <img src={headerImg} alt="" />
            </div>
        </>
    )
}

export default Header;