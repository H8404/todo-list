import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/appReducer'

function getComposeEnhancers() {
    if (process.env.NODE_ENV === 'development') {
        return composeWithDevTools;
    } else {
        return compose;
    }
}

const store = createStore(reducers, getComposeEnhancers()(
    applyMiddleware(thunk)
));

export default store;