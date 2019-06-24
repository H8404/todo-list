import React from 'react';
import styles from './TodoList.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {getPriorityColor} from "../../shared/common";
import CheckBox from "./CheckBox";

function Todo(props) {
    return (
        <div className={styles.shadowContainer}>
            <div className={styles.priority} style={{backgroundColor: getPriorityColor(props.priority)}}/>
            <div className={styles.todoCheckBox}>
                <CheckBox
                    id={props.id}
                    checked={props.done}
                    handleClick={props.handleChecking}
                />
            </div>
            <div className={styles.todoText}>
                <span className={props.done && styles.textDone} style={{marginRight: '15px'}}>{props.title}</span>
                <span className={props.done && styles.textDone}>{props.date}</span>
            </div>
            <div className={styles.todoTrash}>
                <button className={styles.trashButton} type="button" onClick={props.handleRemoving} value={props.id}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default Todo;
