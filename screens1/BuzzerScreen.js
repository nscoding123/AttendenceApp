import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from "../components/AppHeader"
import SoundButton from "../components/SoundButton"

export default class BuzzerScreen extends React.Component{
  constructor(props)
  {
    super(props)
  }
  render(){
    return(
      <View>
      <AppHeader/>
      <SoundButton color={this.props.navigation.getParam("color")} />
      </View>
    )
  }
}