let logUsuarios : Array<object> = [];

let loggin = (data : object) => {
    for (let key in data) {
        console.log(`${key} : ${data[key]}`);
    }
}

let entrada = (user : object, callback : any) => {
    logUsuarios.push(user);
    callback(user);
}

entrada( { nombre: 'Luis', role:'admin' }, loggin);
entrada( { nombre: 'Hazel', role: 'admin' }, loggin);