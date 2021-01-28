import { ICliente } from './ICliente';

export class Cliente implements ICliente {
    creado: Date;
    nombre: String;
    direccion: String;
}