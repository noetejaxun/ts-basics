export class Usuario {
    nombre : string;
    nickname : string;

    constructor(nombre : string, nickname : string) {
        this.nombre = nombre;
        this.nickname = nickname;
    }

    bienvenida() : string {
        return `Hola ${this.nombre}, bienvenido.`;
    }
}