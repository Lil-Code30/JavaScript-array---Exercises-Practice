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

*/

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