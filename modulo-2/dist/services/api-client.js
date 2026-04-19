"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerRecurso = obtenerRecurso;
async function obtenerRecurso(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                codigoEstado: 200,
                exito: true,
                datos: { mensaje: `Datos de ${endpoint}` }
            });
        }, 500);
    });
}
