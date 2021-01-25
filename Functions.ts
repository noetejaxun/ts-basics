
// Función con parámetros opcionales
let nombreCompleto = function(
    primerNombre: string,
    apellido: string,
    apellidoCasada?: string) : string {
    
    if (apellidoCasada) {
        return `${primerNombre} ${apellido} de ${apellidoCasada}`;
    } else {
        return `${primerNombre} ${apellido}`;
    }
}
