import React, { ReactNode } from "react";
import * as ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

interface ModalType {
    children?: ReactNode,
    isOpen: boolean,
    toggle: () => void,
}

export const Modal = (props: ModalType) => {
    const { children, isOpen, toggle } = props;

    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <div className='modal'>
                    <div className={styles['modal__overlay']} onClick={toggle}>
                        <div onClick={(e) => e.stopPropagation()} className={styles['modal__box']}>
                            { children }
                        </div>
                    </div>
                </div>
            )}
        </>
    , document.body);
};
