import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, Switch } from 'react-native'
import { Divider, View } from '../components'
import { Calendar } from 'react-native-calendars'
import { ListItem, Text } from 'react-native-ui-lib'

class Calendario extends Component {
  state = { selectedDay: '' }
  static navigationOptions = {
    title: 'Calendario'
  }

  renderItem({ item }) {
    return (
      <ListItem>
        <ListItem.Part>
          <Switch value={item.status} />
        </ListItem.Part>
        <ListItem.Part>
          <Text dark20>{item.nombre}</Text>
        </ListItem.Part>
      </ListItem>
    )
  }

  render() {
    const { tareas } = this.props
    const { selectedDay } = this.state
    return (
      <View>
        <Calendar
          markedDates={{
            [selectedDay]: { selected: true }
          }}
          // Collection of dates that have to be marked. Default = {}
          onDayPress={day => {
            this.setState({ selectedDay: day.dateString })
          }}
        />
        <View style={{ marginTop: 5, borderColor: 'red' }}>
          <Divider color="red" height={3} />
          {
            <FlatList
              data={tareas.filter(tarea => tarea.fecha === selectedDay)}
              renderItem={item => this.renderItem(item)}
            />
          }
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = ({ tareas }) => ({ tareas })

export default connect(mapDispatchToProps)(Calendario)
