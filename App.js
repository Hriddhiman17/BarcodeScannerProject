import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Scan from './Screens/ScanScreen';

export default class App extends Component{
  render(){
    return (
      <View>
        <Scan/>
      </View>
    );
  }
}