
var password = prompt('Ingrese contraseña')

while (password !== '1234') {
  console.log(password)
  password = prompt('Ingresá contraseña')
}

console.log(password)