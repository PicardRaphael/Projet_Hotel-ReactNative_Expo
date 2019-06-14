import React from 'react';
import { connect } from 'react-redux';

import { toggleTv } from '../store/reducer'
import TvScreen from '../screens/Main/TvScreen';

// Prendre dans le state des propriétés à donner en props
const mapStateToProps = (state) => ({
  tv: state.tv,
});

// Donner en tant que props la possibilité de dispatcher des actions
const mapDispatchToProps = (dispatch) => ({
  tvToggle: (value) => {
    dispatch(toggleTv(value))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(TvScreen);