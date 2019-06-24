import React from 'react';
import styles from './TodoAdd.module.css'

function TextInput(props) {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>{props.title}</div>
            <input className={styles.input} type="text" placeholder={props.placeholder} value={props.value} onChange={props.handleChange}/>
        </div>
    );
}

export default TextInput;
