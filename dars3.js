//taqqoslash operatorlar = ==  === > < <= >=  != !== &&


// = ozgaruvchiga qiymat yuklash
// == ozgaruvchilarni tipiga qaramassdan taqqoslaydi yzni number tipiga otqazib taqqoslaydi
// === bu tipi bilan birgalikda tekshiradi agar taqqosayotgan ozgaruvchilar turli data tiplarda bolsa ular teng emas 
// let a = "test";
// let b = "tests";
// if (a === b) {
//     console.log("ikkalasi teng ");
// } else {
//     console.log("teng emas");
// }


// >

// let a = 12;
// let b = 11;
// if (a > b) {
//     console.log("shart togri ");
// } else {
//     console.log("shart notogri");
// }


// <= >=
// let a = 11;
// let b = "12";
// if (a >= b) {
//     console.log("shart togri ");
// } else {
//     console.log("shart notogri");
// }

// let a = 11;
// let b = "11";
// if (a !== b) {
//     console.log("shart togri ");
// } else {
//     console.log("shart notogri");
// }

//a son beriladiagar u 100ga  teng bolsa eng yuqorri ball
//agar 85 dan katta 100dan

//&&va operatori
// let ball = 5;
// if (ball >= 85 && ball <= 100) {
//     console.log("A");
// }

// if (ball >= 61 && ball < 85) {
//     console.log("B");
// }
// if (ball >= 50 && ball < 61) {
//     console.log("C");
// }
// if (ball < 50) {
//     console.log("failed");
// }


//bzga ikkita son beriladi ularnigkvatratlarinig yigindisi toq yoki juftligini tekshiring

// let a = 2;
// let b = 3;

// ³ - misol
// 4 ta ozgaruvchi mavjud agar birinchi ozgaruvchi va ikkinchi ozgaruvchilar 
//3 ga bolgandagi qoldiqlari yigindisi juft bolsa va uchunchi tortinchi ozgaruvchilar
// 4 ga bolgandagi qoldiqlari yigindisi 15 dan katta bolsa egranga barcha ozgaruvchilar yigindisi chiqarilsin
//aks holda yaroqsiz ozgaruvchilar degan soz chiqarilsin
// let a = 14,
//     b = 5,
//     c = 18,
//     d = 17;
// if ((a % 3 + b % 3) % 2 == 0 || (c % 4 + d % 4) > 4) {
//     console.log(a + b + c + d);
// } else { console.log("yaroqsiz o'zgaruvchilar"); }

// console.log((12 && 0 && false && 0 && 4) || (7 && 6 && true && null));
// console.log(0 || null);


////////////////////

// let AgeDavron = 211;
// if (AgeDavron == 15) {
//     console.log("u maktabda ");
// } else if (AgeDavron == 18) {
//     console.log("u litseyda");
// } else if (AgeDavron == 21) {
//     console.log("u unvda");
// } else {
//     console.log("u oqimaydi");
// }

//bizga bitta son beriladiagarbu son 3ga bolinsa terminalga
//bu son 3 ga bolinadi dep chiqarsin Agar5 ga bolinsa 5 ga boladi dep chiqarsin
// agar3 va 5 ga bolinsa mukammal son dep chiqarsin
let key = 0;
switch (key) {
    case 1:
        console.log("bu bir soni");
        break;
    case 2:
        console.log("bu ikki soni");
        break;
    case 3:
        console.log("bu uch soni");
        break;
    case 5:
        console.log("bu besh soni");
        break;
    case 6:
        console.log("bu olti soni");
        break;

    default:
        console.log("bu togri son emas");
        break;
}
console.log("last code");
//bizga bitta meva beriladi agar bu meva olma bolsa (undan sharbat tayyorlash kk)kabi
// text behi bolsa "undan osh tayyorlash kk"//
//agar anor bolsa""uni yeyish kerak " agar limon bolsa "u bilan choy ishish kerak"
//agar tepadagi mevalardan birontasi bolmasa uni yeb bolmaydi degan text chiqarilsin

// let c = 2 == 3 ? "school" : "unv";
// let b = 3 == 3 ? 12 : 11;
// console.log(c);
// console.log(b);


// ////////////////////
// let r = 10;
// let d = r == 10 ? "o'n" : r == 11 ? "onbir" : r == 12 ? "onikki" : false;
// console.log(d);
// //


///////////////////////
// vazifa

//  
// 1) Lacetti 100 km ga 10 litr benzin sarflaydi
// 2) Damas 100 km ga 8 litr benzin sarflaydi
// 2) Matiz 100 km ga 7 litr benzin sarflaydi

// mashina modeli va km degan ikkita o 'zgaruvchi, kiritlgan km ga qancha benzin ketishini topish kk 
// Example: "Lacetti", "450km" => Lacetti 450 kmga 45 litr benzin sarflaydi.  
// Example2: "Matiz", "50km") => Matiz 50 kmga 3.5 litr benzin sarflaydi