// var arr = [1, 9, 3, 8, 4, 2]
// console.log(arr.sort().reverse())

const customDelete = (array, first, second) => {
    return array.filter(e => (e !== first))
}
console.log(customDelete([1, 2, 3], 1, 2))













// const multiples = (base, limit) => {
//     if (!Number.isInteger((limit / base))) return 'Invalid Numbers'
//     let result = []
//     for (let i = 1; i < (limit / base + 1); i++) {
//         result.push(base * i)
//     }
//     return result
// }
// console.log(multiples(4, 20))

// const alternate = (a, b) => {
//     let alternatedString = ''
//     for (let i = 0; i < a.length; i++) {
//         alternatedString += (a[i] + b[i])
//     }
//     return alternatedString
// }
// console.log(alternate('abc', 'deflkl'))