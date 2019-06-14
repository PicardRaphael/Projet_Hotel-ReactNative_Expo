import React from 'react';
import { connect } from 'react-redux';
import HomeScreen from '../screens/Main/HomeScreen';
import { loadHeating, loadDoor} from '../store/reducer';

// Prendre dans le state des preoprités à donner en props
const mapStateToProps = (state) => ({
  isLoading: state.loading,
  doorOpened: state.doorOpened,
  heating: state.heating,
  lights: state.lights,
  tv: state.tv
})
// Donner en tant que props la possibilité de dispatcher des actions
const mapDispatchToProps = (dispatch) => ({
  loadHeating: () => {
    dispatch(loadHeating());
  },
  loadDoor: () => {
    dispatch(loadDoor());
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);