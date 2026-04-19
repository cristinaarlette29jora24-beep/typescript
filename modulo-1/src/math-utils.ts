export function calcularMedia(array: number[]): number | null {
  if (array.length === 0) return null;
  const suma = array.reduce((acc, val) => acc + val, 0);
  return suma / array.length;
}

export function calcularMediana(array: number[]): number | null {
  if (array.length === 0) return null;
  const ordenado = [...array].sort((a, b) => a - b);
  const mitad = Math.floor(ordenado.length / 2);
  return ordenado.length % 2 !== 0
    ? ordenado[mitad]
    : (ordenado[mitad - 1] + ordenado[mitad]) / 2;
}

export function filtrarAtipicos(array: number[], limite: number): number[] {
  const media = calcularMedia(array);
  if (media === null) return [];
  return array.filter(val => Math.abs(val - media) <= limite);
}