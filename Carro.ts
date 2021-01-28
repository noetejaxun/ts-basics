import { ICarro } from './ICarro';

export class Carro implements ICarro {

    constructor(
        public motor : string,
        public color : string) {
    }

    freno(): void {
        console.log('Me estoy deteniendo...')
    }
}
