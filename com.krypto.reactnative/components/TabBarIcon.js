import React from 'react';
import * as DesignLibrary from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  const Library = (DesignLibrary[props.library]) ? DesignLibrary[props.library] : DesignLibrary['Ionicons'];
  return (
    <Library
      name={props.name}
      size={props.size ? props.size : 26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}