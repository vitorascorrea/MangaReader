import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LibraryHeader from './libraryHeader'

export default class LibraryView extends Component {
  render() {
    return (
      <LibraryHeader />
      // list of favorited mangas thumbnails that links to a mangaView
    );
  }
}