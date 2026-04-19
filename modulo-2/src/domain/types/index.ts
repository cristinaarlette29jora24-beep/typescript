export interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
  edad: number;
}

export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
}

export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;