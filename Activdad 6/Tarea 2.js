let presupuestofijo = prompt ("¿Cual sera su presupuesto fijo?")

// ganaria 70$ la hora
const salariodiario = 560;
const dias_trabajados =  presupuestofijo / salariodiario

let dias_r = dias_trabajados.toFixed();

document.write("Usted trabajará: " + dias_r);
document.write(" dias")

