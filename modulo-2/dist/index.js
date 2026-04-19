"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_js_1 = require("./services/api-client.js");
function generarReporte(estado) {
    switch (estado.tipo) {
        case "ACTIVA":
            return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;
        case "SUSPENDIDA":
            return `Matrícula suspendida: ${estado.motivo}`;
        case "FINALIZADA":
            return `Matrícula finalizada con nota media: ${estado.notaMedia}`;
        default:
            const comprobacion = estado;
            throw new Error(`Estado no manejado: ${comprobacion}`);
    }
}
const estados = [
    { tipo: "ACTIVA", asignaturas: [{ id: "1", nombre: "Redes", creditos: 6 }] },
    { tipo: "SUSPENDIDA", motivo: "Falta de pago" },
    { tipo: "FINALIZADA", notaMedia: 8.5 }
];
estados.forEach(e => console.log(generarReporte(e)));
(0, api_client_js_1.obtenerRecurso)("/estudiantes/1").then(res => {
    console.log("Respuesta API:", res);
});
