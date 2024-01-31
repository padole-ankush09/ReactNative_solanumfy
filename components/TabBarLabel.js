import * as React from 'react';
import { Text } from 'react-native';
import Colors from './Colors';

export default function TabBarLabel({ focused, name }) {
  return focused ? (
    <Text style={{ color: Colors.iconColor,fontSize:12}}>{name}</Text>
  ) : null;
}