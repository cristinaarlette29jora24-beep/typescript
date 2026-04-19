import { EstadoMatricula } from './domain/types/index.js';
import { obtenerRecurso, RespuestaAPI } from './services/api-client.js';
import { Estudiante } from './domain/types/index.js';

function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;
    case "SUSPENDIDA":
      return `Matrícula suspendida: ${estado.motivo}`;
    case "FINALIZADA":
      return `Matrícula finalizada con nota media: ${estado.notaMedia}`;
    default:
      const comprobacion: never = estado;
      throw new Error(`Estado no manejado: ${comprobacion}`);
  }
}

const estados: EstadoMatricula[] = [
  { tipo: "ACTIVA", asignaturas: [{ id: "1", nombre: "Redes", creditos: 6 }] },
  { tipo: "SUSPENDIDA", motivo: "Falta de pago" },
  { tipo: "FINALIZADA", notaMedia: 8.5 }
];

estados.forEach(e => console.log(generarReporte(e)));

obtenerRecurso<Estudiante>("/estudiantes/1").then(res => {
  console.log("Respuesta API:", res);
});