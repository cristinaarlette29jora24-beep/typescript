"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_js_1 = require("./math-utils.js");
const datos = [10, 20, 15, 200, 18, 22, 19, 300, 17];
console.log('Datos originales:', datos);
console.log('Media:', (0, math_utils_js_1.calcularMedia)(datos));
console.log('Mediana:', (0, math_utils_js_1.calcularMediana)(datos));
console.log('Sin atípicos (límite 50):', (0, math_utils_js_1.filtrarAtipicos)(datos, 50));
console.log('Array vacío - Media:', (0, math_utils_js_1.calcularMedia)([]));
