// var arr = [1, 9, 3, 8, 4, 2]
// console.log(arr.sort().reverse())

// const customDelete = (array, first, second) => {
//     return array.filter(e => (e !== first))
// }
// console.log(customDelete([1, 2, 3], 1, 2))


const multiples = (base, limit) => {
    if (!Number.isInteger((limit / base))) return 'Invalid Numbers'
    let result = []
    for (let i = 1; i < (limit / base + 1); i++) {
        result.push(base * i)
    }
    return result
}
console.log(multiples(5, 29))

// const alternate = (a, b) => {
//     let alternatedString = ''
//     for (let i = 0; i < a.length; i++) {
//         alternatedString += (a[i] + b[i])
//     }
//     return alternatedString
// }
// console.log(alternate('abc', 'defff'))

// function alternate(str1, str2) {
//     var arr1 = str1.split("")
//     var arr2 = str2.split("")
//     var word = ""
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             word = word + arr1[i] + arr2[j]
//             i++
//         }
//         return word
//     }
// }
// console.log(alternate("abc", "kjh"))

// for (let i = 0; i < 101; i++) {
//     if (i == 0) console.log(i)
//     else if ((i % 5 == 0) && (i % 3 == 0)) console.log('FizzBuzz')
//     else if (i % 3 == 0) console.log('Fizz')
//     else if (i % 5 == 0) console.log('Buzz')
//     else console.log(i)
// }


// for (var x = 1; x <= 100; x++) {
// if (x % 15 == 0) console.log("FizzBuzz");
// else if (x % 3 == 0) console.log("Fizz");
// else if (x % 5 == 0) console.log("Buzz");
// else console.log(x);
// } 

// function multiples(input1, input2) {
//     let arr = [];
//     let tempValue = 0;
//     for (let i = 1; i < input2; i++) {
//         tempValue = input1 * i;
//         if (tempValue <= input2) { arr.push(tempValue); }
//     }
//     return arr;
// }
// console.log(multiples(5, 20))
// console.log(!true)






