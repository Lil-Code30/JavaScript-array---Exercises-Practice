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


// 4 Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
function last(arr, n){
    if(n == null){
        return arr.slice(-1);
    }
    return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));


// 5. Write a simple JavaScript program to join all elements of the following array into a string.

function arrayToStr(arr, separator){
    return arr.join(separator);
}

myColor = ["Red", "Green", "White", "Black"];

console.log(arrayToStr(myColor, ","));
console.log(arrayToStr(myColor, "+"));

// 6 Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function insertDash(str){
    strToArr = str.split('');

    for(let i=1; i<strToArr.length; i++){
        if((Number(strToArr[i]) % 2 == 0) && Number(strToArr[i-1]) % 2 == 0){
            strToArr[i] = '-' + strToArr[i];
        }
    }
    return strToArr.join("");
}

console.log(insertDash("0254689"));


// 7 Write a JavaScript program to sort the items of an array.
// Note : 🔴🔴

function sortArray(arr){
    // function compare(a, b){
    //     return a - b;
    // }

    // return arr.sort(compare);
    return arr.sort((a,b) => a - b);
    
}
let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(sortArray(arr1));



// 8 Write a JavaScript program to find the most frequent item in an array.
let obj = {};
function mostFrequent(arr){
   
    // create an object with the key as element and value as count
   arr.forEach(element => {
    if(!obj[element]){
        obj[element] = 1;
    }else{
        obj[element]++;
    }
   });

   // verify the max key, value pair
   let max = 0;
   let maxElement;
   for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            maxElement = key;
        }
   }

   return `${maxElement} (${max} times)`;
   
}

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1));


// 9 Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swapCase(str){
    strToArr = str.split(' ');
    result = strToArr.map(word => {
        return word.split('').map(letter => {
            return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
        }).join('');
    })
    return result.join(' ');
}

str1 = "T";
console.log(swapCase(str1));



// 10 Write a JavaScript program that prints the elements of the following array.

// Note : Use nested for loops.

// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Sample Output :

// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

let arr1 = [1, [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let arr2 = [[8, 1, 3, 4], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
function printArrayElements(arr){
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            console.log(`row ${i}`);
            for(let j = 0; j < arr[i].length; j++){
                console.log(arr[i][j]);
            }
        }else{
            console.log(i);
        }
    }
}

printArrayElements(arr1);
console.log("----------------------------");
printArrayElements(arr2);



// 11. Write a JavaScript program to find the sum of squares of a numerical vector.

let arr1 = [1, 2, 3, 4, 5];
function sumOfSquares(arr){
    let sum = 0;

    let squares = arr.map(num => num*num);

    for(let i=0; i < squares.length; i++){
        sum =  sum + squares[i];
    }

    return sum;
}

console.log(sumOfSquares(arr1));


// 12. Write a JavaScript program to compute the sum and product of an array of integers.

let arr1 = [1, 2, 3, 4, 5,6];
function sumAndProduct(arr){
    let sum = 0;
    let product = 1;

    for(let i=0; i < arr.length; i++){
        sum += arr[i];
        product *= arr[i];
    }

    return `Sum: ${sum} and Product: ${product}`;
}

console.log(sumAndProduct(arr1));

*/

