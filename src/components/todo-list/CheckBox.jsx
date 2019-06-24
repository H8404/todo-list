import React from 'react';
import styles from './TodoList.module.css'

function CheckBox(props) {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox"  value={props.id} id={props.id} checked={props.checked} onChange={props.handleClick}/>
            <label htmlFor={props.id} />
        </div>
    );
}

export default CheckBox;
