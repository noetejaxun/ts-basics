let nombres : Array<string> = [
    "Hazel",
    "Stuart",
    "Daniel",
    "Luis"
];

// Ciclo For
for (let i = 0; i < nombres.length; i++) {
    const name = nombres[i];
    console.log(name);
}


// Ciclo While
let j : number = 0;

while (j < nombres.length) {
    console.log(nombres[j]);
    j++;
}


// Ciclo do - while
let i : number = 0;

do {
    console.log(nombres[i]);
    i++;
} while (i < nombres.length);


// Método forEach
nombres.forEach((item : string) => {
    console.log(item);
});