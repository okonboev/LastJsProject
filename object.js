//Objects=> bir nechta malumotlar toplamini key va value
// korinishida saqlashi mumkun bolgan maolumot hisoblanadi

// object ni elon qilish tipi object 
// let objName = {
//     name: "Jasur",
//     address: "Tashkent",
//     email: "example@gmail.com",
//     tel: 9798554955,
// }

// object xosslarini olish 
// object xossalarini olishning hil usuli bor
// 1)
// console.log(objName.address, objName.email);
// 2)
// console.log(objName["name"]);



/// nested object

// let objName = {
//     name: "Jasur",
//     address: {
//         city: "tashkent",
//         viloyat: "Tashkent",
//         street: "naqqoshlik",
//     },
//     email: "example@gmail.com",
//     tel: 9798554955,
// }
// console.log(objName.address.viloyat);

////////////////////////////////
// let arrr = [
//     [1, 2, 3, 4],
//     [2, 3, 4, 6],
//     [45, 56, 67, 0]
// ];
// console.log(arrr[2][2]);
// let arr = [{
//     id: 1,
//     name: "Jasur",
//     address: "Tashkent"
// }, {
//     id: 2,
//     name: "Jamshid",
//     address: {
//         street: "naqqoshlik"
//     }
// }, {
//     id: 3,
//     name: "Botir",
//     address: "Jizzax"
// }];
// console.log(arr[1].address.street);


// let obj = {
//     name: 'Jasur',
//     address: ["toshkent", 12],
// }
// console.log(obj.address[1]);


////object methods
// let user = {
//     name: "Jasur",
//     sayHello: function() {
//         console.log(this);
//     },
//     saybye: () => {
//         console.log(this.name);
//     }
// }
// user.sayHello();
// user.saybye();

// // console.log(this);
// let arr = [
//     { id: 1, age: 23, name: "Davron", address: "tashkent" },
//     { id: 2, age: 19, name: "Botir", address: "Samarqand" },
//     { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
//     { id: 4, age: 16, name: "Islom", address: "Buxoro" },
//     { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
//     { id: 6, age: 20, name: "Hasan", address: "Andijon" },
//     { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
// ];

/// Davron toshkentdan idsi 1 ga teng
/// Rashid Jizzaxdan  idsi 3 ga teng...



///////////////////Object.keys()
///////////////////Object.values()
///////////////////Object.entries()
// let user = {
//     name: "Temur",
//     email: "example@gmail.com",
//     tel: 979856465,
// };
// let a = Object.keys(user);
// console.log(a);

// let a = Object.values(user);
// console.log(a);

// let a = Object.entries(user);
// console.log(a);


/////////////////////////////////////////
// let arr = [
//     { id: 1, age: 23, name: "Davron", address: "tashkent" },
//     { id: 2, age: 19, name: "Botir", address: "Samarqand" },
//     { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
//     { id: 4, age: 16, name: "Islom", address: "Buxoro" },
//     { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
//     { id: 6, age: 20, name: "Hasan", address: "Andijon" },
//     { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
// ];

// function onSearch(x) {
//     let arr2 = arr.filter((val) => val.name.toLowerCase().includes(x.toLowerCase()) ||
//         val.name.toUpperCase().includes(x.toUpperCase()));
//     return arr2;
// }

// let a = onSearch("iS");
// console.log(a);
// { id: 6, age: 20, name: "Hasan", address: "Andijon" }

// function onDelete(ids) {
//     return arr.filter(val => val.id != ids);
// }


// function onDelete(id) {
//     let a = arr.filter(val => val.id == id)[0];
//     let b = arr.indexOf(a);
//     arr.splice(b, 1);
//     return arr;
// // }
// let c = onDelete(2);
// console.log(c);

//////////////////////create
// function onCreate(a) {
//     arr.push(a);
//     return arr
// }

// let b = onCreate({ id: 8, age: 2, name: "yyyyy", address: "uyjhg" })
// console.log(b);

/////////////

// function onCreate(a, b, c) {
//     arr.push({ id: arr.length + 1, age: a, name: b, address: c })
//     console.log(arr);
// }
// onCreate(23, "botir", "Toshkent");
// onCreate(22, "botirjon", "Toshkentdan");
// onCreate(22, "botirjon", "Toshkentdan");
// onCreate(22, "botirjon", "Toshkentdan");//
//


let arr = ["test", 12, 22, "best", "school", "snow", 29, "rain"];
//[12,"best","snow","rain","test",22,"school",29];
//ushbu array ichidagi juft indexdagi elemntlarni olib array oxiriga qoshish kerak
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        arr2.push(arr[i]);
        // arr.splice(i, 1);
    }
}
let arrr = arr.filter((val, inx) => inx % 2 != 0);
let result = arrr.concat(arr2)
console.log(result);