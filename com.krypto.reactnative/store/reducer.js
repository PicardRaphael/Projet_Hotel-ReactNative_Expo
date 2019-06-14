import { ActionSheet } from "native-base";

const defaultState = {
  doorOpened: false,
  email: '',
  heating: {
    power: false,
    temp: 20,
  },
  lights: {
    brightness: 0.5,
    color: 'hotpink'  
  },
  loading: false,
  messages: [],
  tv: false
}

export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const RECEIVED_MESSAGES = 'RECEIVED_MESSAGES';

export const LOAD_HEATING = "LOAD_HEATING";
export const RECEIVED_HEATING = "RECEIVED_HEATING";

export const LOAD_DOOR = "LOAD_DOOR";
export const RECEIVED_DOOR = "RECEIVED_DOOR";

// Role: Modifier le state à partir d'infos fournies par des objects "action"
const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_DOOR':
      return {
        ...state,
        doorOpened: action.value
      }
    case 'TOGGLE_TV':
      return {
        ...state,
        tv: action.value
      }
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email
      }
    case 'SET_HEATING':
      return {
        ...state,
        heating: {
          power: action.power,
          temp: action.temp
        }
      }
    case 'SET_LIGHTS':
      return {
          ...state,
          lights: {
              ...state.lights,
              [action.name]: action.value,
          }
      }
    case LOAD_MESSAGES:
      return {
          ...state,
          loading: true,
      }
    case RECEIVED_MESSAGES:
      return {
          ...state,
          loading: false,
          messages: action.payload
      }
    case LOAD_HEATING:
        return {
            ...state,
            loading: true,
        };
    case RECEIVED_HEATING:
      return {
          ...state,
          loading: false,
          heating: {
              power: action.power,
              temp: action.temp
          }
      }
    case LOAD_DOOR:
        return {
            ...state,
            loading: true
        }
    case RECEIVED_DOOR:
      return {
          ...state,
          loading: false,
          doorOpened: action.door
      }
    default:
      return state;
  }
}

// Action creator
export const toggleDoor = (value) => ({
  type: 'TOGGLE_DOOR',
  value
})
export const receivedDoor = (door) => ({
  type: RECEIVED_DOOR,
  door
})
export const loadDoor= () => ({
  type: LOAD_DOOR,
})

export const toggleTv = (value) => ({
  type: 'TOGGLE_TV',
  value
})

export const setEmail = (email) => ({
  type: 'SET_EMAIL',
  email
})

export const setHeating = (power, temp) => ({
  type: 'SET_HEATING',
  power,
  temp
})

export const setLights = (name, value) => ({
  type: 'SET_LIGHTS',
  name,
  value
})

export const loadMessages = () => ({
  type: 'LOAD_MESSAGES'
})

export const receivedMessages = (messages) => ({
  type: 'RECEIVED_MESSAGES',
  payload: messages
})

export const loadHeating = () => ({
  type: LOAD_HEATING,
})

export const receivedHeating = (power, temp) => ({
  type: 'RECEIVED_HEATING',
  power,
  temp
})
export default reducer;