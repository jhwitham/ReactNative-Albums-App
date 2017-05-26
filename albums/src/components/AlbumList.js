import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in AlbumsList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
      );
    }
}

export default AlbumList;
