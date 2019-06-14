import React from 'react';
import { connect } from 'react-redux';

import Heating from '../screens/Main/HeatingScreen';
import { loadHeating } from '../store/reducer';
import { sendHeating } from '../store/heatingMiddleware';

// Prendre dans le state des propriétés à donner en props
const mapStateToProps = (state) => ({
    isLoading: state.loading,
    heating: state.heating,
});

// Donner en tant que props la possibilité de dispatcher des actions
const mapDispatchToProps = (dispatch) => ({
    loadHeating: () => {
        dispatch(loadHeating());
    },
    sendHeating: (power, temp) => {
        dispatch(sendHeating(power, temp));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Heating);