import React from 'react'
import { View, Text } from 'react-native'

export default ({ children }) => {
  return <View style={style}>{children}</View>
}

const style = {
  backgroundColor: 'white',
  flex: 1,
  paddingHorizontal: 10
}
