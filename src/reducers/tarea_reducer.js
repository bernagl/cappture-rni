export default function(state = null, action) {
  switch (action.type) {
    default:
      return [
        {
          materia: 123,
          nombre: 'Hacer la investigación del tema 1',
          fecha: '',
          status: false
        },
        {
          materia: 123,
          nombre: 'Hacer la investigación del tema 1',
          fecha: '',
          status: true
        }
      ]
  }
}
