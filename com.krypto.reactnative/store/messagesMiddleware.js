import axios from 'axios';
import config from '../config';
import { LOAD_MESSAGES, receivedMessages } from './reducer';

//Localhost
const API_URL = config.apiURL;

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      axios.get(API_URL + '/messages')
        .then((response) => {
          console.log('response');
          store.dispatch(receivedMessages(response.data))
        })
        .catch((error) => {
          console.log(error.message)
        })
      break;
    default:
      next(action)
      break;
  }
}