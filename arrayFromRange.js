function arrayFromRange(min, max){
    let arr = [];

    for (i= min;i<=max;i++)
        arr.push(i);
    return arr;
}

const numbers = arrayFromRange(3,11);

console.log(numbers);