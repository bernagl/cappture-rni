import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Card, Text, View } from 'react-native-ui-lib'

export default ({
  materia: { color, edificio, inicio, fin, maestro, nombre, salon }
}) => {
  return (
    <TouchableOpacity>
      <Card
        containerStyle={{ marginHorizontal: 10, marginVertical: 5 }}
        height={120}
      >
        <Card.Section body margin-0 padding-10>
          <Text text30 orange50>
            {nombre}
          </Text>
          <View row>
            <View column>
              <Text text60 dark40>{`${inicio} - ${fin}`}</Text>
            </View>
          </View>
          <View row padding-0>
            <Text text80 dark40>{`Aula: ${salon}  Profesor: ${maestro}`}</Text>
          </View>
        </Card.Section>
        <View bg-dark-30 style={styles.bar} />
      </Card>
    </TouchableOpacity>
  )
}

const styles = {
  cardSection: {
    // padding: 5
  },
  bar: {
    height: 10,
    backgroundColor: 'red',
    margin: 0
  }
}
