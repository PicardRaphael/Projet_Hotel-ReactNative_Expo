
import axios from 'axios';
import config from '../config';
import { LOAD_HEATING, setHeating, receivedHeating } from './reducer';

const API_URL = config.apiURL;

const SEND_HEATING = 'SEND_HEATING';

export default store => next => (action) => {

    switch(action.type) {
        case LOAD_HEATING:
            axios.get(API_URL + '/chauffage')
                .then((response) => {
                    const { on, temperature } = response.data;
                    store.dispatch(receivedHeating(on, temperature));
                })
                .catch(err => console.log(err.message))
            break;
        case SEND_HEATING:
            const { power, temp } = action;
            axios.put(API_URL + '/chauffage', {on: power, temperature: temp})
                .then(res => {
                    store.dispatch(setHeating(power, temp))
                })
                .catch(err => console.log(err))
            break;
        default:
            next(action);
    }
    next(action);
};

export const sendHeating = (power, temp) => ({
    type: SEND_HEATING,
    power,
    temp
})