// //function declaration
// //function expression
// //arrow function

// //Function Declaration
// // findEven(12)

// function findEven(a) {
//     if (a % 2 == 0) {
//         console.log("juft");
//     } else {
//         console.log("toq");
//     }
// }
// // findEven(22);
// // findEven(21);
// // findEven(1);
// // findEven(2);

// // Function Expression
// let findSquare = function(b) {
//         console.log(b * b);
//     }
//     // findSquare(5)
//     // findSquare(12)



// /////////////////////////Arrow Function
// let findSqtr = (c) => {
//         console.log(Math.sqrt(c));
//     }
//     // findSqtr(9);
//     // findSqtr(16);

// // findSqtr(1678658765876);

// //50 bn 70 orasidagi ixtiyoriy son bilan 100 bilan 130 orasidagi ixtiyoriy sonlar
// // yigindisining tortinchi darajali ildizining butun qismi topilsin.
// // va uningjuft va toqligi tekshirilsin


// findNumber(50, 1000, 100, 130);

// function findNumber(a, b, c, d) {
//     let first = Math.floor(Math.random() * (b - a)) + a + 1;
//     let second = Number.parseInt(Math.random() * (d - c)) + 100;
//     let result = Number.parseInt(Math.pow((first + second), 1 / 3));
//     if (result % 2 == 0) {
//         console.log("juft");
//     } else {
//         console.log("toq");
//     }
// }
// findNumber(500, 2000, 200, 1300);


// //1-misol
// //bitta function tuzish kerak uning ikkita parametri bor 
// //ushbu parametrlarning bir biriga teng yoki yoqligi aniqlansizn
// //ushbu functionni3 hil functionda yozing
// let findEqual = (a, b) => {
//     if (a == b) {
//         console.log("teng");
//     } else {
//         console.log("teng emas");
//     }
// }
// findEqual(2, 2)

// //2-misol4 ta sonning kublariningyigindisi toq yoki juft ekanligini tekshiradigan 
// //function tuzing uni 3 hil functionnda yozib koring
// function findAdds(a, b, c, d) {
//     let all = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) + Math.pow(d, 3)
//     if (all % 2 == 0) {
//         console.log("juft");
//     } else {
//         console.log("toq");
//     }
// }
// findAdds(1, 5, 3, 7)
//     ////
// let findAdd = (a, b, c, d) => {
//     let all = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) + Math.pow(d, 3)
//     if (all % 2 == 0) {
//         console.log("juft");
//     } else {
//         console.log("toq");
//     }
// }

//3-misol
// uch honali sonning raqamlari yigindisi chiqarib beradigan function tuzing 
//ushbumisolni function decloration function expression va arrow functionlarda yozib chiqing

function findResult(num) {
    let first = num - Number.parseInt(num / 10) * 10;
    let second = Number.parseInt(num / 10) - Number.parseInt(num / 100) * 10;
    let third = Number.parseInt(num / 100);
    return (first + second + third);
}
console.log(findResult(785));

/////////////////////////
function funcName(a = 2, b = 5, c = 7) {
    return a + b + c;
}
let f = funcName(1, 4);
console.log(f);