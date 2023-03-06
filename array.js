//array(massiv)-bir vaqtning ozida bir nechta turli tipli 
//qiymatlarni ozida jamlay oladigan toplab hisoblanadi

// Array yaratshning ikki hil usuli bor
//1)usuli
// let arr = [];
// console.log(arr);
//2)usul- new kalit sozi orqali 
// let arr2 = new Array();
// console.log(arr2);

// let arr = [12, 3, 6, "test", undefined, 3, true, false];
// let str = "student";
// console.log(str[3]);

// Array ichidan malumot olish
// console.log(arr[3]);

//Array methods
//arrayga oxiridan elelmt qoshish uchun push() methodi ishlatiladi push 
//mrthodi ichiga hohlagancha  malumot yozish mn 
// let arr = [5, 67, 8, 9, 3];
// console.log(arr);
// arr.push(4, 5);
// console.log(arr);

//arrayga boshidan elemnt qoshish uchun unshift() methodi foydalaniladi
// let arr = [67, 8, 9, 3];
// console.log(arr);
// arr.unshift(9, 4);
// console.log(arr);

// array oxiridan bitta elemnt ochirish uchun pop() 
//methodidan foydalanish kerak
// let arr = [67, 8, 9, 3];
// console.log(arr);
// arr.pop()
// console.log(arr);

//array boshidan bitta elemnt ochirish shift()  
// methodi ham parametr olmaydi



//CRUD
//C - create=>malumot qoshish uchun
//R - (read)=>malumot ni oqib olish uchun 
//U- Update=>malumotni ozgartirish uchun
// D - delete=>malumotni ochirish uchun
//Array elentini ozgartirish
// let arr = ["olma", "behi", "limon", "anor"];
// arr[2] = "mandarin";
// console.log(arr[2]);

//arrayning uzunligini topish uchun(array ichida nechta malunot borligini aniqlash )
// let arr = ["olma", "behi", "limon", "anor", 4, undefined];
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

//ikkita arrayni qoshish uchun concat() methodidan foydalaniladi
// let arr1 = new Array("olma", "behi");
// let lim = "limon";
// let arr2 = ["mandarin", lim]
// console.log(arr1);
// console.log(arr2);
// let lastArr = arr1.concat(arr2);
// console.log(lastArr);

//1-misol
//ozida 10ta malumot  saqlatdigan array yarating va ekranga chiqaring 
//ushbu arrayning ichida nechta malumot borligini  toping  va ekranga chiqaring 
//ushbu array oxiridanikkita elemnt qoshing  va ekranga chiqaring 
//ushbu array boshidan ikkita elemnt qoshiing  va ekranga chiqaring 
//ushbu array oxiridan 3 ta elent ochiring  va ekranga chiqaring 
//ushbu array boshidan 3ta elemnt ochiring \ va ekranga chiqaring 
//ushbu arrayning 5 inchi elemntini ozgartiring  va ekranga chiqaring 
//ushbu array bilan ["Temur","Rashid","Jasur"] quydagi arrayni qoshing  va ekranga chiqaring



// let arr = ["Temur", "Rashidjon", "Jasur"];
// ushbu arraydagi  birinchi indexdagi elemntning 
//ichida nechta harf borligini toping( lengthdan foydalanilmasin )

//uyga vazifa 
// let arr = [4, 8, "olma", "limon", true, 12, false, 9, "anor", "mandarin"];
// let s = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//         s += arr[i];
//     }
// }
// // console.log(s);

// let arr = [4, 15, 2, "limon", true, 12, false, true, null, undefined, 30, "anor", 45, 15, "mandarin"];

// // misollar yechamiz 15 ta elemtnga ega bolgan array mavjud uning ichida
// // numberdan 7ta,  stringdan 3ta, 3ta boolean,null,undefined, malumotlar bor 
// // ushbu malumotlarning ichidagi numberlarning orasidagi 3 ga va 5 ga bolinadigan sonlar kopaytmasini chiqarib beradgan function tuzing
// function findResult() {

// }
// findResult(arr);
// while (arr.length > 9) {
//     arr.pop();

// }
// console.log(arr);
// //
//yangi mavzu otamiz.