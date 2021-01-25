/* 
    throw exception;

    Utiliza la expresión throw para lanzar una excepción.
*/

function obtenerNombreMes(mes : number) : string {
    mes = mes - 1;
    let meses : string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                             'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    if (meses[mes]) {
        return meses[mes];
    } else {
        throw { id: 42, message: 'Número de mes invalido' };
    }
}


let nombreMes : string;

try {
    nombreMes = obtenerNombreMes(15);
    console.log(nombreMes);
} catch (error : any) {
    nombreMes = 'desconocido';
    console.log(error);
}
