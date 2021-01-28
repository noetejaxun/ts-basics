import { Usuario } from './Usuario';

export class Funcionario extends Usuario {
    private registro : number;

    constructor(nombre : string, nickname : string, registro : number) {
        super(nombre, nickname);
        this.registro = registro;
    }

    /*bienvenida(): string {
        return `Hola ${this.nombre}, tu número de registro es ${this.registro}.`;
    }*/
}