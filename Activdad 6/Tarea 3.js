let presupuestofijo = prompt ("¿Cual sera su presupuesto fijo?")

// ganaria 35$ la hora
const salariodiario = 280;
const dias_trabajados =  presupuestofijo / salariodiario

let dias_r = dias_trabajados.toFixed();

const meses = dias_r / 22

const cantidad_a_restar = presupuestofijo * 0.42
const descuento_total = presupuestofijo - cantidad_a_restar
const coste_del_proyecto_con_descuento = presupuestofijo - descuento_total

document.write("Usted cobrara:" + coste_del_proyecto_con_descuento)
document.write(" dolares")










