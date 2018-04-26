import React, { Component } from 'react'
import { Text } from 'react-native'
import { View } from '../components'

export default class Calendarios extends Component {
  static navigationOptions = {
    title: 'Calendario'
  }

  render() {
    return (
      <View>
        <Text>View Calendarios</Text>
      </View>
    )
  }
}
