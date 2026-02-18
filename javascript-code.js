//Find frequency

function frequency(){

    let occurence = [2, 4, 5, 3, 4, 3, 5, 1, 1, 4, 7 , 9 ,8 ,7, 6 , 0];
    let obj = {}
    for (let index = 0; index < occurence.length; index++) {
        const element = occurence[index];
        if(obj[element]){
            obj[element] += 1;
        }else{
            obj[element] = 1
        }
    }
    console.log('occurence: ', obj);
}

//frequency();

//occurrences of a character

function occurence(){
    let string = 'GeeksForGeeks';
    let character = 'g';
    let occurence = 0;
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if(element === character){
            occurence++;
        }   
    }
    console.log(occurence);
    
}

// occurence();


// sort array in ascending order
function sortArray(){
    let arr = [5, 3, 8, 1];
    let num = arr[0];
    let sortedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(num < e){
            sortedArray.push(e);
        }else{
            sortedArray.unshift(e)
        }
    }
    console.log(sortedArray);
}

// sortArray();

//method 2
function sortArray2(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

// sortArray2([4, 2, 7, 8, 0]);

//sort array in descending order
function sortArrayDesc(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] > arr[i]){
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr);
}
// sortArrayDesc([3, 5, 1, 6]);

// find minimum value in array
function findMin(arr){
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;
}
// console.log(findMin([5, 10, 1, 8]));

//method 2
function findMin2(arr) {
    let min = Math.min(...arr);// find minimum value
    console.log(min) 
}

// console.log(findMin2([5, 10, -1, 8]));

// merge two arrays and remove duplicates
let one = [1, 2 , 3];
let two = [2, 3, 4];
let mergedArray = [...one, ...two];
// console.log( [...new Set(mergedArray)]);


//find first non repeated character
function fun(str) {
    const charCount = {};

    // count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }    

    // find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

// console.log(fun('GeeksForGeeks'));


// Print the longest word in an array
function longestWord(str){
    let arr = str.split(' ');
    let longest = arr[0];
    for(let word of arr){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

// console.log(longestWord('GeeksForGeeks is great'));



// capitalize first letter of each word
function capitalizeFirstLetter(str){
    let words = str.split(' ');
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let firstChar = word.charAt(0).toUpperCase();
        let rest = word.slice(1);
        words[i] = firstChar+rest;  
    }
    return words.join(' ');

}

// console.log(capitalizeFirstLetter('hello geeks'));


//return indices of sum 

var twoSum = function(nums, target) {
    const map = new Map();

    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if(obj.hasOwnProperty(nums[i])){            
            return [obj[nums[i]], i];
        }else{
            obj[target - nums[i]] = i;
        }
        console.log(obj);
    }

    
    // for(let i=0; i < nums.length; i++){
    //     if(map.has(nums[i])) {
    //         return [map.get(nums[i]), i];
    //     }
    //     map.set(target - nums[i], i);
    //     console.log(map);
        
    // }
    // return [];
};

let nums = [2,7,11,15];
let target = 22;
console.log(twoSum(nums, target));


//debounce
function debounce(func, delay){
    let timeout;
    return function (...args){
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    }
}

//throttle
function throttle(func, delay){
    let last = 0;

    return function(...args){
        let now = Date.now();
        if(now - last >= delay){
            last = now;
            func.apply(this, args);
        }
    }
}


//// Recursive deep flatten
function flattenDeep(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }
  return result;
}


function flatten(arr){
    const result = [];
    for(const item of arr){
        if(Array.isArray(item)){
            result.push(...flatten(item))
        }else{
            result.push(item)
        }
    }
    return result;
}


const countOccurrencesArr = [0,0,3,6,6,7,9,3,7,0];

function countOccurrences(arr) {
  const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  return freq;
}

// countOccurrences(countOccurrencesArr);
