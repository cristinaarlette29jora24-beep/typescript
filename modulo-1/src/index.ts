import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

const datos = [10, 20, 15, 200, 18, 22, 19, 300, 17];

console.log('Datos originales:', datos);
console.log('Media:', calcularMedia(datos));
console.log('Mediana:', calcularMediana(datos));
console.log('Sin atípicos (límite 50):', filtrarAtipicos(datos, 50));
console.log('Array vacío - Media:', calcularMedia([]));