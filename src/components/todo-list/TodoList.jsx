import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import Todo from './Todo'
import {setTodos} from "../../actions/actions";

function TodoList(props) {

    function handleRemoving(event){
        const tempTodos = [...props.todos];
        const index = tempTodos.findIndex(function(todo) {
            return todo.id === event.target.value;
        });
        tempTodos.splice(index, 1);
        props.setTodos(tempTodos);
    }

    function handleChecking(event){
        const tempTodos = [...props.todos];
        const todo =  tempTodos.find(function(todo) {
            return todo.id === event.target.value;
        });
        const index = tempTodos.findIndex(function(todo) {
            return todo.id === event.target.value;
        });
        todo.done = !todo.done;
        tempTodos[index] = todo;
        props.setTodos(tempTodos);
    }

    return (
        <React.Fragment>
            <h1>Todo-list</h1>
            <div>
                {props.todos.length > 0 ? (
                    props.todos.map((todo, index) => (
                            <Todo
                                key={`${index}Todo`}
                                title={todo.title}
                                date={todo.date}
                                priority={todo.priority}
                                id={todo.id}
                                done={todo.done}
                                handleRemoving={handleRemoving}
                                handleChecking={handleChecking}
                            />
                        )
                    )
                ) : (
                    <div>Todo-list is empty. You can add a new todo from menu.</div>
                )}
            </div>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setTodos : (todos) => dispatch(setTodos(todos)),
    };
}

const Connector = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
export default Connector;
