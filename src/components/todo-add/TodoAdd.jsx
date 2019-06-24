import React, { useState } from 'react';
import {connect} from "react-redux";
import TextInput from './TextInput'
import styles from './TodoAdd.module.css'
import RadioButtonGroup from "./RadioButtonGroup";
import { priorities } from "../../shared/common";
import {setModalMessage, setTodos} from "../../actions/actions";

function TodoAdd(props) {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDeadline, setTodoDeadline] = useState('');
    const [radioButtonValue, setRadioButtonValue] = useState(priorities.LOW);
    const radioButtons = [{name: 'Low', value: priorities.LOW}, {name: 'Medium', value: priorities.MEDIUM}, {name: 'High', value: priorities.HIGH}];

    function handleTitleChange(event){
        setTodoTitle(event.target.value)
    }

    function handleDeadlineChange(event){
        setTodoDeadline(event.target.value)
    }

    function handleRadioButtonChange(event){
        setRadioButtonValue(event.target.value)
    }

    function addTodo(event){
        event.preventDefault();
        const tempTodos = [...props.todos];
        const todo = {
            id: `${props.todos.length}${todoTitle}`,
            title: todoTitle,
            date:  todoDeadline,
            priority: radioButtonValue,
            done: false
        };
        tempTodos.push(todo);
        props.setTodos(tempTodos);
        clearForm();
        setModalMessage('Todo was added successfully!');
    }

    function clearForm(){
        setTodoTitle('');
        setTodoDeadline('');
        setRadioButtonValue(priorities.LOW);
    }

    function setModalMessage(message){
        props.setModalMessage(message)
    }

    return (
        <React.Fragment>
            <h1>Add todo</h1>
            <form>
                <TextInput value={todoTitle} title="Title" placeholder="Write title" handleChange={handleTitleChange}/>
                <TextInput value={todoDeadline} title="Deadline" placeholder="17.8.2020" handleChange={handleDeadlineChange}/>
                <RadioButtonGroup title="Priority" buttons={radioButtons} handleChange={handleRadioButtonChange} selected={radioButtonValue}/>
                <input className={styles.addButton} type="submit" value="Add" onClick={addTodo}/>
            </form>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setTodos : (todos) => dispatch(setTodos(todos)),
        setModalMessage : (message) => dispatch(setModalMessage(message))
    };
}

const Connector = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoAdd);
export default Connector;
