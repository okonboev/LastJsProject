// array ichidagi istalgan elemntni ochirish  delete vazifasi 
//osha elmntni ochiradi faqat u turgan joy qoladi 
// let arr = ["olma", "behi", "limon", "mandarin"]; //["olma",<empty>, "limon", "mandarin"];
// console.log(arr);
// delete arr[1];
// delete arr[1];
// console.log(arr);

// splice ushbu method aray ichidan hohlagan elemntni ochirindshi
// mumkun istalgan joydan boshlab elemnt qoshishi mumkun
// splice ichida yozilgan parametrlarning birinchi index 
//ikkinchi parametri  count(nechta) 
// keyingi parametrlari hammasi arrayga qoshiladugan elentlar boladi
// let arr = ["olma", "behi", "limon", "mandarin", "banan"];
// arr.splice(2, 1, "tarvuz");
// console.log(arr);

// slice array ichidan elemntlarni kopiravat qilib olib beradi
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, 7, 8];
// let arr2 = arr.slice(2);
// let arr3 = arr.slice(2, 5);
// let news = ["olma", "behi", "limon"];
// console.log(arr2);
// console.log(arr3);

//indexOf elemntlarnigindexini aniqlab beradi 
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
// arr.splice(arr.indexOf("olma"), 1);
// console.log(arr);

//lastindexOf elemntlarnigindexini aniqlab beradi
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
// arr.splice(arr.lastIndexOf("olma"), 1);

// console.log(arr);

//reverse()- array ichidagi malumotlarni teskarti tartibda joylashtrib beradi
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
// arr.reverse();
// console.log(arr);

//sort() bu method array ichidagi elemntlarni tartiblab beradi
// let arr = [6, 7, 233, 12, 0, 6, -1];
// arr.sort((a, b) => a - b);
// console.log(arr);

//1-misol Array ichida unda 10ta malumot bor uning 6tasi string 
//tipida qolgani number va boolean ushbu array ichidagi o harfi bilan 
// boshlangan elemntni ochirsin 
// let arr = ["olma", 8, "behi", true, "limon", false, "olcha", "olxori", "ananas", 12]
// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) == "string" && arr[i][0] == "o") {
//         arr.splice(i, 1);
//         console.log(i);
//     }
// }
// let s = 0;
// while (s < arr.length) {
//     if (arr[s][0] == "o") {
//         arr.splice(arr.indexOf(arr[s]), 1);
//     }
//     s++;
// }
// console.log(arr);

//2misol
// let arr = ["olma", 8, "behi", 45, "limon", false, 11, "olxori", 21, 12];
// ushbu array  ichidagi numberlarni boshqa arrayga yuklab chiqarsin va
// osha arrayning ichidagi sonlarni kamayish tartibida joylashtrsin
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//         arr2.push(arr[i]);
//     }
// }
// arr2.sort((a, b) => b - a);
// // arr2.reverse();
// console.log(arr2);


// 3-misol 
// misollar yechamiz
// mavzu otamiz



/// array methos
//find
//filter
//split
//join
//map

// let arr = [1, 3, 1, 4, 18, 10];
// let result = arr.find((val, inx) => val % 2 == 0 && val % 3 == 0);
// console.log(result);



// let arr = [1, 3, 1, 4, 18, 10, 36];
// let result = arr.filter((val, inx) => val % 2 == 0 && val % 3 == 0);
// console.log(result);

// let str = "this is ai car"
// let a = str.split("tss");
// console.log(a);
// let b = a.join("/");
// console.log(b);

// let arr = [1, 2, 3, 4, 5, 6]
// let newarr = arr.map((val, inx) => `${val} ning indexi ${inx} ga teng`)
// console.log(newarr);



//1 misol 
//let arr=["olma","behi","anorlar","limonlar",true,false,"Tarvuz",12,16]
//manashu array ichidagi 5ta belgidan kop bolgan stringlarni chiqarib bersin array
//methodlaridan foydalaning


//2 misol
////let arr=["olma","behi","anorlar","limonlar",true,false,"Tarvuz",12,16]
//manashu array ichidagielemntlarning har birini tipi bilan birga chiqarsin

// 3-misol
//let arr=["olma","behi","anorlar","limonlar",true,false,"Tarvuz",12,16]
//ushbu array ichidagi birinchi kelgan uzunligi 8 ga tebf bolganelemnt topilsin

// 4-misol
// let str = "this is my favourite IT Course"; // => (Course IT favourite my is this)
// // manashu stringnign har bir sozini array ichiga alohida elemnt qilin joylashtring
// // va hosil bolgan arrayni teskari tartibda joylashtrib yana bitta stringga yiging
// let str2 = str.split(" ").reverse().join(" ");
// console.log(str2);\


// 5-misol
// let arr = ["olma", "behi", "anorlar", "limonlar", true, false, "Tarvuz", 12, 16];
// // ushbu array ichidagi birinchi halfi o bilan boshlangan va tipi number 
// // bolgan elemntlarni ochirin tashlang
// let arr2 = arr.filter(val => typeof val != "number" && val[0] != "o");
// console.log(arr2);

// includes()
// reduce()
// let a = "Tis Is A Course";
// // console.log(a.includes("Cous"));
// let arr = ["text", "tex",
//     "best", 1, 2, 3, 4, 5
// ];
// console.log(arr.includes("tex"));
///////////////////
//reducer
// let arr = [1, 2, 3, 4, 5, 6];
// let r = arr.reduce((sum, val, inx, array) => sum + val, 0);
// console.log(r);

// let b = [1, 2, 3, 4, 7];
// // let a = b.map((val, inx) => `${val} ${val%2==1 ? "toq" : "juft"}`);
// // let a = b.map((val, inx) => `${val} ${val % 2 == 0 && "juft" || "toq"}`);
// // console.log(a);
// let s = b.reduce((sum, val, inx) => (sum + (inx % 2 == 0 ? val : 0)), 0);
// console.log(s);

// 1-misol
let arr = ["test12a", "best13b", "test14larc", "last4d", "car9devise", "com1pyuter", "okay5"];
//ushu array ichidagi elemntlarning ichidagi raqamlar yigindisi topilsin;
let s = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] * 0 == 0) {
            s = s + (+arr[i][j]);
        }
    }
}
console.log(s);