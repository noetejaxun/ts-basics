let user = {
    name: "luis",
    password: "ABCDE",
    role: ["admin"]
}

// Sin retorno de valor
function imprimirNombreUsuario() : void {
    console.log(user.name);
}

imprimirNombreUsuario();