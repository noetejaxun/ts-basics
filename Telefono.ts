import { Producto } from './Producto';

export class Telefono extends Producto {
    cambiarNombre(nombre: string): void {
        this.nombre = nombre;
    }
}