//... sread operator

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 7, 8, 9, ...arr];
// console.log(arr);
// console.log(arr2);



// array destructuring
// let arr = ["olma", [1, 2, 3], "olma", "behi", "banan", "anor"];
// let meva = "olma";
// let [yomaloq, [bir, ikki, uch], uchburchak, piramida, an] = arr;
// console.log(uch);


//object destructuring
// let obj = {
//     name: "temur",
//     email: "tyttyyt",
//     address: {
//         num: 3,
//         viloyat: "ppppppppp",
//         city: {
//             tel: 67576576
//         }
//     },
//     street: "naqqoshlik",
// };
// let { name: n, email, address: { num, viloyat, city: { tel } }, street: s } = obj;
// console.log(tel);




// //optional chaining(?)
// let obj = {
//     name: "temur",
//     email: "tyttyyt",
//     address: {
//         num: 3,
//         viloyat: "ppppppppp",
//         citys: {
//             tel: 67576576
//         }
//     },
//     street: "naqqoshlik",
// };
// console.log(obj.address.city.test);

////////////////////////////////////call apply bind
// let obj = {
//     sayHello: function(a, b, c = "text") {
//         console.log(`salom ${this.name} yoshingiz ${a} dami siz ${b} danmisiz ${c}`);
//     }
// }
// let emp1 = { name: "Davron" };
// let emp2 = { name: "Rayhon" };
// obj.sayHello.call(emp1, 19, "toshkent", "best");
// obj.sayHello.call(emp2, 18, "Toshkent", "text");


///////apply
// let obj = {
//     sayHello: function(a, b, c) {
//         // console.log(this.name, a, b, c);
//         // console.log(`salom ${this.name} yoshingiz ${a} dami siz ${b} danmisiz ${c}`);
//     }
// }
// let emp1 = { name: "Davron" };
// let emp2 = { name: "Rayhon" };
// // obj.sayHello.apply(emp1, [19, "toshkent", "best"]);
// obj.sayHello.call(emp2, [18, "Toshkent", "text"]);


//bind
function sayAge() {
    console.log(this.age);
}
let myfunc = sayAge.bind({ age: 19 });
sayAge();
myfunc();
let a = 21;
// kudfhskdfhksjhdfjkds