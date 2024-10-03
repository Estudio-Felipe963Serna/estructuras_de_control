let sumaEdades = 0;
const cantidadPersonas = 5;

for (let i = 1; i <= cantidadPersonas; i++) {
    let edad = parseInt(prompt(`Ingresa la edad de la persona ${i}:`));
    sumaEdades += edad; 
}

let edadPromedio = sumaEdades / cantidadPersonas;

console.log(`La edad promedio es: ${edadPromedio}`);

if (edadPromedio >= 18) {
    console.log("La edad promedio es mayor o igual a la mayoría de edad.");
} else {
    console.log("La edad promedio es menor que la mayoría de edad.");
}