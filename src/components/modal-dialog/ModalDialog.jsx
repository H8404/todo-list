import React from 'react';
import Modal from 'react-modal';
import styles from './ModalDialog.module.css'

function ModalDialog(props) {
    return (
        <Modal
            className={styles.dialogStyle}
            overlayClassName={styles.dialogStyleOverlay}
            isOpen={props.text !== ''}
            contentLabel="Modal"
            ariaHideApp={false}
        >
            <div className={styles.message}>{props.text}</div>
            <button className={styles.button} onClick={props.handleCloseModal}>OK</button>
        </Modal>
    );
}

export default ModalDialog;
