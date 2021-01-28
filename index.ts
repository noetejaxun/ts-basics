import * as fetch from 'node-fetch';

class Customer {
    id: number;

    constructor(id : number) {
        this.id = id;
    }

    getCustomer(): Promise<Object> {
        const url = `https://lt-func.azurewebsites.net/api/customers?code=4a5vv8taDgGNUrA4iziN25sXZwtNP4MNueAwrR7N0VJFvNMshFBHCw==`;
        return fetch(url).then((data) => data)
                         .catch(err => err);
    }
}

let customer = new Customer(1);
let data = customer.getCustomer();

let printCustomer = () => {
    data.then((it : any) => {
        console.log(it.body);
    });
}

printCustomer();
