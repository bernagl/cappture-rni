import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Dias } from '../data'

const dia = Dias[new Date().getDay()]
class Inicio extends Component {
  static navigationOptions = {
    title: dia
  }

  render() {
    return (
      <View>
        <Text>View Inicio</Text>
      </View>
    )
  }
}

const mapDispatchToProps = ({ auth }) => ({ auth })

export default connect(mapDispatchToProps)(Inicio)
