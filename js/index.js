let simulations = window.localStorage.getItem('simulations') != null ? JSON.parse(window.localStorage.getItem('simulations')) : []

class Simulation {
  constructor (firstName, lastName, totalDistance, fuelConsumption, fuelPrice) {
    this.firstName = firstName
    this.lastName = lastName
    this.totalDistance = totalDistance
    this.fuelConsumption = fuelConsumption
    this.fuelPrice = fuelPrice
  }

  getFirstName () {
    return this.firstName
  }

  getLastName () {
    return this.lastName
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`
  }

  getTotalDistance () {
    return this.totalDistance
  }

  getFuelConsumption () {
    return this.fuelConsumption
  }

  getFuelPrice () {
    return this.fuelPrice
  }

  getTotalCost () {
    return (this.totalDistance / 100 * this.fuelConsumption * this.fuelPrice).toFixed(2)
  }

  getTotalFuel () {
    return (this.totalDistance / 100 * this.fuelConsumption).toFixed(2)
  }
}

const initSimulation = () => {
  const firstName = document.querySelector('#firstName').value
  const lastName = document.querySelector('#lastName').value
  const totalDistance = parseInt(document.querySelector('#totalDistance').value)
  const fuelConsumption = parseInt(document.querySelector('#fuelConsumption').value)
  const fuelPrice = parseInt(document.querySelector('#fuelPrice').value)
  if (!firstName || !lastName || !totalDistance || !fuelConsumption || !fuelPrice) { throw new Error('Some field is empty.') }
  return new Simulation(firstName, lastName, totalDistance, fuelConsumption, fuelPrice)
}

try {
  const simulateBtn = document.querySelector('#simulate')
  const simulationsBtn = document.querySelector('#simulations')
  const layout = document.querySelector('#layout')
  const confirmAvatar = document.querySelector('#confirmAvatar')

  confirmAvatar.addEventListener('click', async () => {
    const username = document.querySelector('#avatarInput').value
    if (!username) {
      const alertAvatar = document.querySelector('#alert-avatar')
      alertAvatar.textContent = 'No ingresaste un nombre de usuario.'

      if (alertAvatar.classList.contains('visually-hidden')) {
        alertAvatar.classList.remove('visually-hidden')
      }

      setTimeout(() => {
        alertAvatar.classList.add('visually-hidden')
      }, 3000)

      return
    }
    const githubResponse = await fetch(`https://api.github.com/users/${username}`)
    if (githubResponse.status !== 200) return

    const githubUser = await githubResponse.json()

    const imgAvatar = document.querySelector('#img-avatar')
    if (imgAvatar.classList.contains('visually-hidden')) {
      imgAvatar.classList.remove('visually-hidden')
      imgAvatar.classList.add('rounded')
    }
    imgAvatar.src = githubUser.avatar_url
    const myModalEl = document.querySelector('#modalAvatar')
    const modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide()
  })

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
    window.localStorage.setItem('simulations', JSON.stringify(simulations))
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

    const backBtn = document.querySelector('#back')
    backBtn.addEventListener('click', (e) => {
      e.preventDefault()
      window.location.reload()
    })
  })
} catch (err) {
  console.error(err)
}
