let simulations = localStorage.getItem('simulations') != null ? JSON.parse(localStorage.getItem('simulations')) : []

class Simulation {
  constructor(firstName, lastName, totalDistance, fuelConsumption, fuelPrice) {
    this.firstName = firstName
    this.lastName = lastName
    this.totalDistance = totalDistance
    this.fuelConsumption = fuelConsumption
    this.fuelPrice = fuelPrice
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

  getTotalDistance() {
    return this.totalDistance
  }

  getFuelConsumption() {
    return this.fuelConsumption
  }

  getFuelPrice() {
    return this.fuelPrice
  }

  getTotalCost() {
    return (this.totalDistance / 100 * this.fuelConsumption * this.fuelPrice).toFixed(2)
  }

  getTotalFuel() {
    return (this.totalDistance / 100 * this.fuelConsumption).toFixed(2)
  }
}

const initSimulation = () => {
  const firstName = document.querySelector('#firstName').value
  const lastName = document.querySelector('#lastName').value
  const totalDistance = parseInt(document.querySelector('#totalDistance').value)
  const fuelConsumption = parseInt(document.querySelector('#fuelConsumption').value)
  const fuelPrice = parseInt(document.querySelector('#fuelPrice').value)
  if (!firstName || !lastName || !totalDistance || !fuelConsumption || !fuelPrice)
    throw new Error('Some field is empty.')
  return new Simulation(firstName, lastName, totalDistance, fuelConsumption, fuelPrice)
}

try {
  const simulateBtn = document.querySelector('#simulate')
  const simulationsBtn = document.querySelector('#simulations')
  const layout = document.querySelector('#layout')

  simulationsBtn.addEventListener('click', (e) => {
    const modalBody = document.querySelector('#modalBody')
    if (simulations.length > 0) {
      modalBody.innerHTML = `
      <ol class="list-group list-group-numbered">
        ${simulations?.map(simulation => `
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${simulation.firstName + ' ' + simulation.lastName}</div>
            Distance: ${simulation.totalDistance}km | Total cost: $${(simulation.totalDistance / 100 * simulation.fuelConsumption * simulation.fuelPrice).toFixed(2)} | Total fuel: ${(simulation.totalDistance / 100 * simulation.fuelConsumption).toFixed(2)} lt
          </div>
        </li>
      `).join('')}
      </ol>`
    }
  })

  simulateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const simulation = initSimulation()
    simulations = [...simulations, simulation]
    localStorage.setItem('simulations', JSON.stringify(simulations))
    layout.innerHTML = `
    <div class="row g-3">
      <div class="col-12">
        <h1 class="display-1 text-center">Fuel simulated</h1>
      </div>
      <div class="col-12">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">${simulation.getFullName()}</h4>
          <p>The total cost of the route would be $${simulation.getTotalCost()} and ${simulation.getTotalFuel()} liters of fuel would be required.</p>
        </div>
      </div>
      <div class="col">
          <button id="back" class="btn btn-primary float-end">Back</button>
        </div>
    </div>
    `

    const backBtn = document.querySelector("#back")
    backBtn.addEventListener('click', (e) => {
      e.preventDefault()
      location.reload()
    })

  })
} catch (err) {
  console.error(err)
}

/* 
try {
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
 */