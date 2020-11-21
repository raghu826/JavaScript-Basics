const numbers = [1,2,4,5,3,67, 78];

function includes(array, searchElement){

    for (let i of array)
    if(searchElement === i)
        return true;
    return false;
}

console.log(includes(numbers, 100));
console.log(includes(numbers, 78));