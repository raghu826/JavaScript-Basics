const numbers = [1,2,4,5,3,67,1,1,1,1,1,8];

function excludes(array, excludeElement){

   const output = []
    for(let i of array)
        if ( !excludeElement.includes(i))
        output.push(i);
    return output
}


console.log(excludes(numbers, [1,2,4]));