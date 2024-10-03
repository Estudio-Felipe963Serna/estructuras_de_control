const numero1 = parseFloat (prompt("Ingrese el numero 1"));
const numeor2 = parseFloat (prompt("Ingrese el numero 2"));
const operacion = prompt ("Ingrese el tipo de operacion");
console.log (operacion);
if (operacion === "suma"){
    console.log (numero1 + numeor2);
} else if (operacion === "resta"){
    console.log (numero1 - numeor2);
}else if ( operacion === "multiplicacion"){
    console.log (numero1 * numeor2);
}else if ( operacion = "divicion"){
    console.log ( numero1 / numeor2);
}else{
    console.log( " Error ");
}