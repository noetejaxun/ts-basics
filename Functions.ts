let user = {
    name: "luis",
    password: "ABCDE",
    role: ["admin"]
}

// Sin retorno de valor
function imprimirNombreUsuario() : void {
    console.log(user.name);
}

// Retorna la suma de x, y (number)
function suma(x : number, y : number) : number {
    return x + y;
}

// Retorna un string con formato.
let miSuma = function(x : number, y : number) : string {
    return `la suma de ${x} + ${y} es igual a ${x + y}`;
}

// Retorna un Array de los números x, y
let miArreglo = function(x: number, y: number) : Array<number> {
    return [x, y];
}


// Parámetros opcionales
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
