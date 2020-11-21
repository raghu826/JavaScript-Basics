

function CreateAddress(street, city, zipCode){
    
        this.street = street;
        this.city = city;
        this.zipCode =  zipCode;

}

let address = new  CreateAddress('a', 'b', 'c');

console.log(address);