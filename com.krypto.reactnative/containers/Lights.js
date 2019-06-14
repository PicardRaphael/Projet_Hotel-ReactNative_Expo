import React from 'react';
import { connect } from 'react-redux';

import LightsScreen from '../screens/Main/LightsScreen';
import { setLights } from '../store/reducer';

// Prendre dans le state des propriétés à donner en props
const mapStateToProps = (state) => ({
  lights: state.lights
});

// Donner en tant que props la possibilité de dispatcher des actions
const mapDispatchToProps = (dispatch) => ({
  setLights: (name, value) => {
    dispatch(setLights(name, value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LightsScreen);