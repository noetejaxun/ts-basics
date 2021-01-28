const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa cumplida');
        }, Math.random() * 2000 + 1000);
    });
}

miPromesa()
    .then((success) => {
        console.log('Success', success);
    })
    .catch((error) => {
        console.log('Error:', error);
    });