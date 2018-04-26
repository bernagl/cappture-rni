export default function(state = null, action) {
  switch (action.type) {
    default:
      return [
        {
          materia: 123,
          nombre: 'Hacer la investigación del tema 1',
          fecha: '2018-04-11',
          status: false
        },
        {
          materia: 123,
          nombre: 'Hacer la investigación del tema 1',
          fecha: '2018-04-11',
          status: true
        }
      ]
  }
}
