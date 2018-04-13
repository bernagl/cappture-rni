import React from 'react'
import View from 'react-native'

export default ({ Component }) => {
  return (
    <View style={style}>
      <Component />
    </View>
  )
}

const style = {
  backgroundColor: 'white'
}
