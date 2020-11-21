const numbers = [1,2,3,4,5];
const output = move(numbers,2,2 )
console.log(output)

function move(array, index, offset){
    const position = index+offset;
    if(position >= array.length || position<0){
        console.error('Invalid offset.');
        return;
    }

    let element = undefined;
    for (i = 0; i <= array.length; i++)
        if(i == index)
        element = array.splice(i,1); 
        array.splice(index+offset, 0 , element[0]);
    return array;
   
}


