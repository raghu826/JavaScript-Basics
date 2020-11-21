
try{
    const numbers= [1,2,3,4,5,6,1,1,1,1];
    const output = occcurenceCount(true, 1);
    console.log(output);
}
catch (e) {
    console.log('Invalid array.')

}

function occcurenceCount(array, searchElement){
    let count = 0;
    for (let element of array){
        if (element === searchElement)
        count = count +1;
    }
    return count;
}