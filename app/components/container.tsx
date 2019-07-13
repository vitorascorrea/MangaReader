import React, { Component } from 'react';
import { Text, View } from 'react-native';

import BottomNav from './bottomNav';
import MainView from './mainView';

export default class Container extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MainView />
        <BottomNav />
      </View>
    );
  }
}