let div = document.querySelector('.div');
let push = document.querySelector('.push');
let p = document.querySelectorAll('.p');
let input = document.querySelector('.input');
let main = document.querySelector('.main');


// let a = [2, 4, 56, 0, 213, 12, 7, 10, 2]


// let b = a.map((item, index) => {
//     console.log(item)

//     return item * 5;
// })
// console.log(b)
// let b = a.map(item => item + 1)
// console.log(b)


// let result = b.filter((item, index) => {
//     return item >= 5;
// })
// console.log(result)


// --------------------------------------------task1

// let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
// push.onclick = () => {
//     let b = a1.map(function (item) {
//         return item * 2;
//     })
//     p[0].innerHTML = (b);
//     return a1 = b;
// }

// -----------------------------------------task 2

// let a2 = [2, 3, 4, 5, 10, 11, 12]

// push.onclick = function () {
//     let b2 = a2.map(function (item) { return item = item ** 2 })
//     p[1].innerHTML = (a2)
//     a2 = b2;
// }

// --------------------------------------task 3

// let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// push.onclick = function () {
//     let b3 = a3.map(function (item) {
//         return item = +item;
//     })
//     a3 = b3;
//     console.log(a3)
// }

// -------------------------------------task4

// let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11]

// // push.onclick = function () {
// //     let c = a4.filter(function (item) {
// //         if (typeof item == 'number') {
// //             return item;
// //         }
// //     })
// //     console.log(c)
// //     console.log(a4)
// // }

// push.onclick = function () {
//     let c4 = []
//     a4.forEach(function (item) {
//         if (typeof item == 'number') {
//             c4.push(item)
//         }
//     })
//     console.log(c4);
// }

// ------------------------------------task 5
// let b1 = [3, 14, 15, 92];

// push.onclick = function () {
//     let b1res = b1.filter(function (item) {
//         if (item % 2 == 0) return item
//     })
//     console.log(b1res);
// }
// -----------------------------------task 6

// let b6 = [3, 14, 15, 92, "6", "5", "hello", 32]

// push.onclick = function () {
//     let b6res = b6.filter(function (item) {
//         // if (typeof item == "string") return item;
//         if (typeof item == "number") return item;
//     })
//     b6 = b6res
//     console.log(b6)
// }

// ---------------------------------task 7

// let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]

// push.onclick = () => {
//     let b7res = b7.filter((item) => {
//         if (typeof item === "string") return item;
//     })
//     console.log(b7res)
// }

// ----------------------------------task8

// let b8 = [3, 14, 15, 92, "6", "5", "hello", 32]

// push.onclick = () => {
//     let text = ''
//     let b8res = b8.filter((item, index) => {
//         if (item % 2 === 0) {
//             text += (`${item} = ${index} <br>`);
//             return item
//         }
//     })
//     p[2].innerHTML = text;
//     console.log(b8res)
// }


// -------------------------------------task 9

// let b9 = [3, "hello", 4, "world", 5, "hi"]

// push.onclick = () => {
//     let string = [];
//     let num = [];

//     b9.filter((item) => {
//         if (typeof item === "string") {
//             string.push(item);
//         } else {
//             num.push(item)
//         }
//     })
//     console.log(string);
//     console.log(num);
// }

// ------------------------------------task10

let b10 = [[1, 2, 3], [3, 4, 6], [4, 5, 7], [8, 9, 3]]

push.onclick = () => {
    let b10r = [];
    b10.filter(function (arr) {
        arr.filter(function (item) {
            if (item === 3) {
                b10r.push(arr);
            }
        })
    })
    console.log(b10r)
}