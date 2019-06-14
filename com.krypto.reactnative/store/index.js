import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import messagesMiddleware from './messagesMiddleware';
import heatingMiddleware from './heatingMiddleware'
import doorMiddleware from './doorMiddleware';
const middleware = applyMiddleware(messagesMiddleware, heatingMiddleware, doorMiddleware);

const store = createStore(reducer, middleware);

export default store