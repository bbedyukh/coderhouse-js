const totalDistance = parseInt(prompt('Ingrese la distancia total de la ruta en km: '))
if (totalDistance <= 0) {
  console.log('La distancia debe ser mayor a 0.')
}
const fuelConsumption = parseInt(prompt('Ingrese la cantidad de combustible que se consume cada 100km: '))
if (fuelConsumption <= 0) {
  console.log('La cantidad de combustible debe ser mayor a 0.')
}

const price = parseInt(prompt('Ingrese el precio del combustible: '))
if (price <= 0) {
  console.log('El precio debe ser mayor a 0.')
}
const totalCost = (totalDistance / 100 * fuelConsumption * price).toFixed(2)
const totalFuel = (totalDistance / 100 * fuelConsumption).toFixed(2)

if (!totalDistance || !fuelConsumption || !price) {
  alert('No se pudo calcular el costo total.')
} else {
  alert(`El costo total de la ruta es de $${totalCost} y se necesita ${totalFuel} litros de combustible.`)
}
