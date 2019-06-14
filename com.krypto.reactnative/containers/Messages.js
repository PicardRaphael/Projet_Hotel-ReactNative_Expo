import React from 'react';
import { connect } from 'react-redux';

import Messages from '../screens/Main/MessagesScreen';
import { loadMessages } from '../store/reducer'
// Prendre dans le state des propriétés à donner en props
const mapStateToProps = (state) => ({
  isLoading: state.loading,
  messages: state.messages
});

// Donner en tant que props la possibilité de dispatcher des actions
const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => {
    dispatch(loadMessages())
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Messages);