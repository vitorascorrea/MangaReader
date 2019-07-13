import React, { Component } from 'react';
import { Text, View } from 'react-native';

import SearchHeader from './searchHeader';
import SearchResultList from './searchResultList';

export default class MangaView extends Component {
  render() {
    return (
      <View>
        <SearchHeader />
        <SearchResultList />
      </View>
    );
  }
}