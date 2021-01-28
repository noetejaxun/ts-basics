export class Persona {
    // Atributo accedido desde fuera de la clase
    public nombre: string;
    // Atributo accedido únicamente en la definición de clase
    private numCuenta: string;
    // Atributo accedido desde la clase heredada
    protected docPersonal: string;

    constructor(nombre: string, docPersonal: string, numCuenta: string) {
        this.nombre = nombre;
        this.docPersonal = docPersonal;
        this.numCuenta = numCuenta;
    }

    public setNumCuenta(numCuenta: string): void {
        this.numCuenta = numCuenta;
    }

    public getNumCuenta(): string {
        return this.numCuenta;
    }

}