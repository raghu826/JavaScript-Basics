const address = {
    street : 'Hummelstrasse',
    city : 'Weimar',
    zipcode: 99423
};

function showAddress(address){

    for (let x in address)
        console.log(x, address[x]);

}

showAddress(address)