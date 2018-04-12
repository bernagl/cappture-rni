import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import { Calendario, Inicio, Login, Materia, Perfil } from '../views'

export default StackNavigator({
  Aplicacion: {
    screen: TabNavigator({
      Inicio: { screen: Inicio },
      Materia: { screen: Materia },
      Calendario: { screen: Calendario },
      Perfil: { screen: Perfil }
    })
  },
  Login: { screen: Login }
  //   Horario: { screen: Horario },
  //   Calendario: { screen: Calendario },
  //   Perfil: { screen: Perfil }
})
