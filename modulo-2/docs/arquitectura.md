# Decisiones de arquitectura - Módulo 2

## Por qué interface y no type

Para las entidades `Estudiante` y `Asignatura` usamos `interface` porque representan objetos con estructura fija. Las interfaces están pensadas para modelar datos jerárquicos y objetos.

Usamos `type` solo para la unión `EstadoMatricula` porque une varias interfaces distintas, y eso es exactamente para lo que sirve `type`.

## Por qué unión discriminada

En lugar de un objeto con propiedades opcionales como `asignaturas?` o `motivo?`, usamos una unión discriminada con la propiedad `tipo`. Así TypeScript sabe exactamente qué propiedades existen en cada caso y nos avisa si intentamos acceder a algo que no existe.

## Por qué genéricos en obtenerRecurso

El método `obtenerRecurso<T>` puede devolver cualquier tipo de dato sin perder la seguridad de tipos. Si mañana añadimos una entidad `Profesor`, no necesitamos escribir una función nueva — usamos la misma con `obtenerRecurso<Profesor>`.

## Por qué never en el switch

Si en el futuro añadimos un nuevo estado a `EstadoMatricula`, el compilador nos obliga a manejarlo en la función `generarReporte`. Sin `never`, ese caso nuevo pasaría desapercibido y generaría un bug silencioso.