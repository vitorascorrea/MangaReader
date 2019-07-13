import React, { Component } from 'react';
import { Text, View } from 'react-native';

import MangaHeader from './mangaHeader';
import MangaSummary from './mangaSummary';

export default class MangaView extends Component {
  render() {
    return (
      <View>
        <MangaHeader />
        //here we have two tabs
        <MangaSummary />
        //2 - chapter list
      </View>
    );
  }
}