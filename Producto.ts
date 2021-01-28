export abstract class Producto {
    nombre: string = "Default";
    precio: number = 1000;
    abstract cambiarNombre(nombre: string): void;

    obtenerPrecio() {
        return this.precio;
    }
}
