/**
 * Suma de números
 */
document.getElementById('sum').addEventListener('click', sumNumbers)

function sumNumbers () {
  const retries = prompt('Ingresar número de repeticiones')

  for (let i = 1; i <= parseInt(retries); i++) {
    const nro1 = prompt('Ingresa un numero')
    if (nro1 == null) {
      break
    }
    const nro2 = prompt('Ingresa otro numero')
    if (nro2 == null) {
      break
    }

    if (isNaN(nro1) || isNaN(nro2)) {
      alert('El primer o el segundo valor ingresado no es un número.')
      break
    }
    alert(`La suma de los números ingresados es <${parseInt(nro1) + parseInt(nro2)}>`)
  }
}

/**
 * Concatenación de textos
 */

document.getElementById('concatenation').addEventListener('click', concatenation)

function concatenation () {
  let concatenados = ''
  while (true) {
    const texto = prompt('Ingresá un texto')
    if (texto === '') {
      alert('El texto ingresado está vacío. Volvé a ingresarlo.')
      continue
    }
    if (texto == null) {
      break
    }
    if (!concatenados) {
      concatenados += texto
    } else {
      concatenados += ', ' + texto
    }

    alert(`El texto concatenado es <${concatenados}>`)
  }
}

/**
 * Repetir texto 'Hola'
 */

document.getElementById('repeatText').addEventListener('click', repeatText)

function repeatText () {
  const retries = prompt('Ingresar número de repeticiones')
  for (let i = 1; i <= parseInt(retries); i++) {
    console.log('Hola')
  }
}
