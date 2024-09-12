// LOCALSTORAGE
const botonLocal = document.getElementById('botonLocal')
botonLocal.addEventListener('click', function() {
    localStorage.setItem('user', 'Juan Pablo')
    localStorage.setItem('correo', 'juanpablo@gmail.com')
    localStorage.setItem('edad', 30)

    console.log(localStorage.length)
})
    

const botonLS = document.getElementById('limpiarLS')
botonLS.addEventListener('click', function() {
    localStorage.removeItem('user')
})

const limpiarCompleto = document.getElementById('limpiarCompleto')
limpiarCompleto.addEventListener('click', function() {
    localStorage.clear()
})

const obtenerItem = document.getElementById('obtenerItem')
obtenerItem.addEventListener('click', function() {
    const user = localStorage.getItem('user')
    alert(`El usuario seleccionado es ${user}`)
})

// SESSIONSTORAGE
// sessionStorage.setItem('key', 'value')
// sessionStorage.removeItem('keyCorrespondiente')
// sessionStorage.clear()
// sessionStorage.getItem('keyCorrespondiente')

const setearColor = document.getElementById('setColor')
setearColor.addEventListener('click', function() {
   sessionStorage.setItem('color', 'verde')
})



