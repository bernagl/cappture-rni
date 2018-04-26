import React, { Component } from 'react'
import { Text } from 'react-native'
import { View } from '../components'

export default class Materia extends Component {
  static navigationOptions = {
    title: 'Materia'
  }

  render() {
    return (
      <View>
        <Text>View Materia</Text>
      </View>
    )
  }
}
