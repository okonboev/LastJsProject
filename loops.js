//quotes bizda 3 hil quotes bor "",'',``

// console.log("o'qituvchi");
// console.log('O"qituvchi');
// let a = 12;
// console.log(`${a} ning qiymati uning yoshiga teng`);
// // helpers
// console.log("\t best");
// console.log("this is our \n best lesson");

// string data type
// let names = "Abbos";
// let b = names.slice(1, 4);
// console.log(names.length);
// console.log(b);
// toLowerCase() text ichidagi katta harflarni kichikiga aylantirib beradi
// let str = "This Is Just Text";
// // toUpperCase() harflarni kattasiga ogirib beradi
// console.log(str.toUpperCase());
// indexOf-string ichida  malum harfning  tartib raqamini olish uchun ishlatiladi
// let str = "Salom";
// let s = str.indexOf("l");
// console.log(s);
// tyeOf()-malumotlarni qaysii data typega kirishini aniqlab beradi
// function fff() {}
// let a;
// console.log(typeof a);
// let str = 12;
// let num = "23";
// // let r = +num;
// let r = Number(num);
// let t = String(str);
// console.log(typeof t);



//
// for
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//  string tipidagi numlar beriladi uning raqamlari yigindisi topilsin
// let num = "123452";
// console.log(typeof num[0]);
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum = sum + (+num[i])
// }
// console.log(sum);


//////////////////misollar
//1-misol
// let num = "23545998";
// // let num = "234567"
// if (num.length % 2 == 1) {
//     console.log(num[Number.parseInt(num.length / 2)]);
// } else {
//     let a = num[num.length / 2 - 1];
//     let b = num[num.length / 2];
//     console.log((+a + +b) / 2);
// }


// // 2-misol
// let num = "231749";
// let max = num[0];
// let min = num[0];
// for (let i = 0; i < num.length; i++) {
//     if (max < num[i]) {
//         max = num[i];
//     }
//     if (min > num[i]) {
//         min = num[i]
//     }
// }
// console.log(max);
// console.log(min);


// while
// do while
// break
// continue

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 15;
// do {
//     console.log(i);
//     i--;
// // } while (i > 0)

// let num = "7654383";
// let last;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] == "4") {
//         last = num[i]
//         continue;
//     }
//     console.log("ishladi");

// }
// console.log(last);



//function argumentiga kiritilgan sonning necga 
//xonali son ekanliginitoping lengthdan foydalanilmasin 
//while yordamida yechish kerak
function findAll(a) {
    let s = 0;
    while (a > 0) {
        a = Number.parseInt(a / 10);
        s++;
    }
    return s;
}


console.log(findAll(982));
//4 xonali son

//function parametridagi sonnning raqamlar yigindisi chiqarilsin
// albatta while yordamida
function findSum() {}
findSum(1431)
    //raqamlar yigindisi 9 ga teng

// uyga vazifa
let str = "WebBrainAcaDAmya";
let s = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "A") {
        s++;
    }
}

let j = 0;
while (j < str.length) {
    if (str[j] == "a" || str[j] == "A") {
        s++;
    }
    j++;
}
console.log(s);

//3-misol
let a = "3608d75h"
b = ''
for (let i = 0; i < a.length; i++) {
    if (a[i] * 0 == 0) {
        b += a[i]
    } else break
}
console.log(b);

//1-misol
//let str = "WebBrainAcaDAmya"; usgbu ozgaruvchidanechta 
//katta harf qatnashganini toping

// /2-misol 
//let str = "WebBrainAcaDAmya"; ushbu ozgaruvchidan faqat katta
// harflarni ajratib chiqarib bersin=>WBADA

// /3-misol let a="3608d75h" ushbu ozgaruvchida sonning ichida
// harf qatnashib qolsa osha harfgacha bolgan qismini chiqarsin
// va shui yerda sikl ishlashdan toxtasin

// /4-misol while yordamida 100 gacha bolgan sonlar ichida 3 ga
// va 7 ga bolinadigan sonlarni toping

// 5-misol tepadagi misollarni function blan yozib chiqing

// 6-misol let str="39ou765b58b40" ushbu string ichidan
// faqat numberlar yigindisi topilsin

//7-misol let str="39ou765b58b40" ushbu string 
//ichidagi harflarni ajrating (oubb)