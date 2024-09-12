fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',    
})
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {

    })
    .finally(() => {
        console.log('Clausula Finally')
    })