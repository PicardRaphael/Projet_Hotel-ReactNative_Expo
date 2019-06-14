
import axios from 'axios';
import config from '../config'
import { toggleDoor, LOAD_DOOR, receivedDoor } from './reducer';

const API_URL = config.apiURL;
const SEND_DOOR = 'SEND_DOOR';

export default store => next => (action) => {
    switch(action.type) {
        case LOAD_DOOR:
            axios.get(API_URL + '/unlock_door')
                .then(response => {
                    const { door_locked } = response.data
                    store.dispatch(receivedDoor(door_locked));
                })
                .catch(() => {})
        case SEND_DOOR:
          const { value } = action;

          axios.put(API_URL + '/unlock_door', {
              "door_locked": value,
          })
              .then(() => {
                  store.dispatch(toggleDoor(value)) 
              })
              .catch(err => console.log(err.message))
        break;
        default:
            next(action);
        break;
    }
   
};

export const sendDoor = (value) => ({
  type: SEND_DOOR,
  value
})