import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from './Colors';

export default function TabBarIcon(props) {
  return (
   
    <Ionicons
    // name="md-home"
      name={props.name}
      size={24}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.iconColor : Colors.tabIconDefault}
    />
  );
}
