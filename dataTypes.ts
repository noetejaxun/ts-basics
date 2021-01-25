// Booleano
let bool : boolean = false;

// Numérico
let int: number = 8;
let decimal: number = 6.65;
let hex: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// Cadenas
let color : string = "Azul";
let nombre : string = 'Luis';
let ciudad : string = `Soy ${nombre} y vivo en Guatemala`;

// Array
let lista : number[] = [1, 2, 3, 0xf00d];
let _lista : Array<number> = [4, 3, 2, 1];
// let _lista : Array<number> = [4, 3, 2, 1, "Error"];

// Tupla
let tupla : [number, string];
tupla = [1, "Texto"];
// tupla = ["Texto", 1]; // Error

// Enum
enum Color {
    Azul,
    Rojo,
    Amarillo
}

let azul = Color.Azul;

// Desconocido (Unknown)
let noEstoySeguroDelValor : unknown = 4;
noEstoySeguroDelValor = "Era string";
noEstoySeguroDelValor = true; // Era booleano

// Any
let looselyTyped: any = {};
//looselyTyped.name;
//looselyTyped.user.name;

// Void
function advertencia(): void {
    console.log("Esto es una advertencia");
}

// Null y Undefined
let undef : number;
console.log(typeof undef);

let nu : null = null;
console.log(typeof nu);

// Object
declare function suma(obj : object | null) : void;

suma({x: 1, y: 2});
suma(null);
// suma(1);
