import React from 'react';
import ReactDom from 'react-dom';

import Classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={Classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
    return <div className={Classes.modal}>
        <div className={Classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById( 'overlays' );

function Modal(props){
    return <>
        {ReactDom.createPortal( <Backdrop onClose={props.onClose} />, portalElement )}
        {ReactDom.createPortal( <ModalOverlay> {props.children} </ModalOverlay>, portalElement )}
    </>
}

export default Modal;