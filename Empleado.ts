import { Persona } from './Persona';

export class Empleado extends Persona {
    idEmpleado: string;

    constructor(nombre: string, docPersonal: string, numCuenta: string) {
        super(nombre, docPersonal, numCuenta);
    }
}
