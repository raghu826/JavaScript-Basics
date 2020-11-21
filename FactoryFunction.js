
let address = createAddress('a', 'b', 'c');

console.log(address);

function createAddress(street, city, zipCode){
    return {
        street : street,
        city :city,
        zipCode : zipCode

    };
}