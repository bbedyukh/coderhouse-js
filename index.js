let history = []
let isRunning = true

try {
  while (isRunning) {
    const fullName = prompt('Ingresá tu nombre completo.')
    assertValueOrFail(fullName)

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

    history = [...history, fullName]
    alert(`El costo total de la ruta es de $${totalCost} y se necesita ${totalFuel} litros de combustible.`)

    if (!isRunning) {
      console.log(`Se agregó a <${fullName}> al historial de cálculos.`)
    }
  }
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
