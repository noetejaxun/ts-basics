class Animal {
    nombre: string;

    constructor(nombre : string) {
        this.nombre = nombre;
    }

    public caminar(metros: number) : void {
        console.log(`${this.nombre} caminó ${metros} metros.`)
    }
}

let perro = new Animal('Firu');
perro.caminar(5);
