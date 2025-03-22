/*
// Write a JavaScript function to check whether an `input` is an array or not.
function is_Array(str){
    return Array.isArray(str);
}

console.log(is_Array([1,2,3]));
console.log(Array.isArray('hello'));
console.log(toString.call([1,2,3]));
console.log(toString.call('hello'));
console.log(typeof([1,2,3]));


// 2 Write a JavaScript function to clone an array.

function cloneArray(arr){
    // newArr = [];
    // for(let i=0; i< arr.length; i++){
    //     newArr.push(arr[i]);
    // }
    // return newArr;
    //return arr.slice();
    return [...arr];
}
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

// 3 Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array

function first(arr, n){
    // if(arr == null){
    //     return void 0;
    // }

    if(n == null){
        return arr[0];
    }
    if(n < 0){
        return [];
    }
    return arr.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));

console.log(first([7, 9, 0, -2],3));

console.log(first([7, 9, 0, -2],6));

console.log(first([7, 9, 0, -2],-3));

*/
// 4 Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
function last(arr, n){
    return arr.slice(-1, n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));