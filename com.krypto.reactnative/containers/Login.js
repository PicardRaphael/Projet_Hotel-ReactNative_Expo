import React from 'react';
import { connect } from 'react-redux';
import LoginScreen from '../screens/Login/LoginScreen';
import { setEmail } from '../store/reducer';

// Prendre dans le state des preoprités à donner en props
const mapStateToProps = (state) => ({
  email: state.email
})
// Donner en tant que props la possibilité de dispatcher des actions
const mapDispatchToProps = (dispatch) => ({

  setEmail: (email) => {
    dispatch(setEmail(email))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);