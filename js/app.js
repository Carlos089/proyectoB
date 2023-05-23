//PRÁCTICA PDF MÓDULO 3 INICIACIÓN A JS
const booking1 = { count: "", price: 60 }
const booking2 = { count: "", price: 88 }
booking1.count = prompt("Introduce el número de noches para el primer alojamiento de booking1")
booking2.count = prompt("Introduce el número de noches para el segundo alojamiento de booking2")


let booking1Total = booking1.count * booking1.price
let booking2Total = booking2.count * booking2.price
console.log("Precio total de booking1:", booking1Total)
console.log("Precio total de booking2:", booking2Total)

const discount1 = booking1Total > 500 ? booking1Total * 0.2 : 0;
const discount2 = booking2Total > 500 ? booking2Total * 0.2 : 0;

if (booking1Total > 500 && discount1 > 0) {
    const booking1Final = booking1Total - discount1
    console.log("A booking1 se aplica un descuento de:", discount1, "con un precio final de:", booking1Final)
}
if (booking2Total > 500 && discount2 > 0) {
    const booking2Final = booking2Total - discount2
    console.log("A booking2 se aplica un descuento de:", discount2, "con un precio final de:", booking2Final)
}


// EXTRA:

var reservaIguales = booking1 == booking2
console.log("¿Son iguales las dos reservas?:", reservaIguales)

const sumarAmbasCounts = booking1.count + booking2.count
console.log("Suma de ambas noches de reservas:", sumarAmbasCounts)


if (booking1.count > booking2.count) {
    console.log("booking1 tiene más noches reservadas")
} else if (booking1.count < booking2.count) {
    console.log("booking2 tiene más noches reservadas")
} else { console.log("Tienen el mismo número de noches reservadas")}


let ampliarUnaNocheUnaReserva = ++booking1.count
console.log("Ampliar una noche a booking1:", ampliarUnaNocheUnaReserva)

const booking1Final = booking1Total - discount1
const booking2Final = booking2Total - discount2
const diferenciaPrecioFinales = booking1Final - booking2Final
console.log(diferenciaPrecioFinales, "es la diferencia de precios finales incluídos descuentos, de ambas reservas")


const mostrarReservaMayorPrecioFinales = booking1Final > booking2Final ? "booking1 tiene el mayor coste" : "booking2 tiene el mayor coste"
console.log ("¿Cuál reserva tiene mayor coste?:", mostrarReservaMayorPrecioFinales)


const mostrarNumeroReservaQuePuedeAplicarDescuento1 = discount1 > 0 ? "booking1 tiene descuento de " + discount1 : "booking1 no aplica descuento"
console.log(mostrarNumeroReservaQuePuedeAplicarDescuento1)                                                         
const mostrarNumeroReservaQuePuedeAplicarDescuento2 = discount2 > 0 ? "booking2 tiene descuento de " + discount2 : "booking2 no aplica descuento"
console.log(mostrarNumeroReservaQuePuedeAplicarDescuento2)                                                        


var mostrarTodasConDescuentoSiLoTuvieranTodas = discount1 && discount2 > 0 ? "Todas con descuento" : "No tienen todas descuento" 
console.log(mostrarTodasConDescuentoSiLoTuvieranTodas)                                                            


const sumaTotalesConDescuento = booking1Final + booking2Final;
console.log("Suma de precios totales con descuentos de ambas reservas:", sumaTotalesConDescuento)
