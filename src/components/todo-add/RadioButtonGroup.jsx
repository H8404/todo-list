import React from 'react';
import styles from './TodoAdd.module.css'
import { getPriorityColor } from "../../shared/common";

function RadioButtonGroup(props) {
    return (
        <div className={styles.inputContainer}>
            <div>{props.title}</div>
            {props.buttons.map((button, index) => (
                <div key={`${index}radio`}>
                    <input type="radio" value={button.value} onChange={props.handleChange} checked={button.value === props.selected} />
                    <span style={{color: getPriorityColor(button.value), marginLeft: '10px'}}>{button.name}</span>
                </div>
            ))}
        </div>
    );
}

export default RadioButtonGroup;
