var precioInmueble = null;
var cuotaInicial = null;
var inicialMonto = null;
var mmontoFinanciar = null;
var tcea = null;
var periodoCredito = null;

function calculoCuota(){

var precioInmueble = parseInt($("#cost").val());

var cuotaInicial = parseInt($("#initial-rate").val());
var inicialMonto = (precioInmueble*cuotaInicial)/100;
var montoFinanciar = precioInmueble-inicialMonto;
var tcea = parseInt($("#rate").val());
var tasaMensual = (tcea/12)/100;
var periodoCredito = parseInt($("#time").val());
var mesesCredito = periodoCredito*12;

// compute the monthly payment figure
var x = Math.pow(1 + tasaMensual, mesesCredito); //Math.pow computes powers
var resultadoCuota = (montoFinanciar*x*tasaMensual)/(x-1);
console.log(resultadoCuota.toFixed(2))

$("#initial-mount").val(inicialMonto);
$("#resultado-cuota").empty();
$("#resultado-cuota").append('<b>US$</b> '+resultadoCuota.toFixed(2))

console.log(`
precio inmueble: ${precioInmueble}
monto cuoda inicial: ${inicialMonto}
monto a financiar: ${montoFinanciar}
TCEA: ${tcea}
TEM: ${tasaMensual}
Periodo en meses: ${mesesCredito}
Cuota mensual: ${resultadoCuota}

`);

//(Monto * (TEM x (1 + TEM) ^ n)) / ((1 + TEM) ^ n) - 1)


};