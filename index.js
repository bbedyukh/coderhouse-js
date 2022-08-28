let history = []
let isRunning = true

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFirstName() {
    return this.firstName
  }

  getLastName() {
    return this.lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

}

try {
  do {
    const firstName = prompt('Ingresá tu nombre.')
    assertValueOrFail(firstName)

    const lastName = prompt('Ingresá tu apellido.')
    assertValueOrFail(lastName)

    const person = new Person(firstName, lastName)

    const totalDistance = parseInt(prompt('Ingresá la distancia total de la ruta en km: '))
    assertValueOrFail(totalDistance)
    if (totalDistance <= 0) {
      console.log('La distancia debe ser mayor a 0.')
    }

    const fuelConsumption = parseInt(prompt('Ingresá la cantidad de combustible que se consume cada 100km: '))
    assertValueOrFail(fuelConsumption)
    if (fuelConsumption <= 0) {
      console.log('La cantidad de combustible debe ser mayor a 0.')
    }

    const price = parseInt(prompt('Ingresá el precio del combustible: '))
    assertValueOrFail(price)
    if (price <= 0) {
      console.log('El precio debe ser mayor a 0.')
    }
    const totalCost = (totalDistance / 100 * fuelConsumption * price).toFixed(2)
    const totalFuel = (totalDistance / 100 * fuelConsumption).toFixed(2)

    history = [...history, { firstName: person.getFirstName(), lastName: person.getLastName(), fullName: person.getFullName(), date: new Date().toISOString()}]
    alert(`El costo total de la ruta es de $${totalCost} y se necesita ${totalFuel} litros de combustible.`)

    if (!isRunning) {
      console.log(`Se agregó a <${person.getFullName()}> al historial de cálculos.`)
    }
  } while (isRunning)
} catch (err) {
  console.log(err)
}

function assertValueOrFail (value) {
  if (!value) {
    isRunning = false
    console.log(`Personas que realizaron el cálculo <${history.length}>`)
    console.log(history)
    throw new Error('Se canceló el proceso del cálculo.')
  }
}
