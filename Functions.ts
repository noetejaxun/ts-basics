// Funciones con retorno de valor

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