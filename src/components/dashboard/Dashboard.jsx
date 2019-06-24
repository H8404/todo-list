import React from 'react';
import styles from './Dashboard.module.css'
import {NavLink, Route, Switch} from 'react-router-dom'
import TodoList from "../todo-list/TodoList";
import TodoAdd from '../todo-add/TodoAdd'
import ModalDialog from "../modal-dialog/ModalDialog";
import {setModalMessage} from "../../actions/actions";
import {connect} from "react-redux";

function Dashboard(props) {

    function closeModal(){
        props.setModalMessage('');
    }

    return (
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <NavLink
                        exact
                        to="/todo/list"
                        className={styles.nav}
                        style={{marginRight: '20px'}}
                        activeClassName={styles.navActive}
                    >
                        Todo-list
                    </NavLink>
                    <NavLink
                        exact
                        to="/todo/add"
                        className={styles.nav}
                        activeClassName={styles.navActive}
                    >
                        Add todo
                    </NavLink>
                </div>
            </div>
            <main className={styles.main}>
                <div className={styles.content}>
                    <Switch>
                        <Route
                            exact={true}
                            path={'/todo/list'}
                            render={() => (<TodoList/>)}
                        />
                        <Route
                            exact={true}
                            path={'/todo/add'}
                            render={() => (<TodoAdd/>)}
                        />
                    </Switch>
                </div>
            </main>
            <ModalDialog
                text={props.modalMessage}
                handleCloseModal={closeModal}
            />
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        modalMessage: state.modalMessage,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setModalMessage : (message) => dispatch(setModalMessage(message)),
    };
}

const Connector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
export default Connector;

