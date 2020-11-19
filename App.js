import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { StatusBar, View } from 'react-native';

import Router from './Router'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <Router></Router>
    </View>
  )
}

export default App;


