let nombres : Array<string> = [
    "Hazel",
    "Stuart",
    "Daniel",
    "Luis"
];
nombres = [];
// Ciclo do - while
let i : number = 0;

do {
    console.log(nombres[i]);
    i++;
} while (i < nombres.length);