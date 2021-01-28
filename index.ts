import { Empleado } from './Empleado';
import { Cliente } from './Cliente';

let empleado = new Empleado('Luis', '123', '321');
empleado.setNumCuenta('321');
empleado.idEmpleado = 'XA900';
console.log(empleado);



let cliente = new Cliente('Juan', '789', '987');
cliente.setNumCuenta('987');
cliente.idCliente = '123455';
console.log(cliente);