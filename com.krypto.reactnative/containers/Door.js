import React from 'react';
import { connect } from 'react-redux';
import DoorScreen from '../screens/Main/DoorScreen';
import { loadHeating } from '../store/reducer';
import { sendDoor } from '../store/doorMiddleware';

// Prendre dans le state des preoprités à donner en props
const mapStateToProps = (state) => ({
  isLoading: state.loading,
  doorOpened: state.doorOpened,
})
// Donner en tant que props la possibilité de dispatcher des actions
const mapDispatchToProps = (dispatch) => ({
  loadDoor: () => {
    dispatch(loadHeating());
  },
  sendDoor: (value) => {
    dispatch(sendDoor(value))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(DoorScreen);