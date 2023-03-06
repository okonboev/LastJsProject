//Numbers
//Number.isInteger(true,false)
// isintagerning vazifasi numbrning butun yoki butun emasligini aniqlab beradi
//Number.parsint  --- uning vazifasi sonni butun songa aylantirib beradi
//number.parsfloat -- uning vazufasi string tipidagi sonlarni nember tipiga otqazib beradi va agar string boshida number bolsa uni ham ajratib bera oladi
//toFixed
// let a = 33.4567476769;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// let b = "2331wdwe";
// console.log(b);
// console.log(Number.parseFloat(b));
// let uzunlik = "metr12";
// console.log(Number.parseFloat(uzunlik) * 2);
// let num = 12.233;
// let natija = num.toFixed(1) * 2
// console.log(natija);


//Type conversions
// console.log(Number(true), "truening number qiymati");
// console.log(Number(false), " falsning number qiymati");
// console.log(Number("12"), "stringdagi sonni number tipiga otqazib beradi");
// console.log(Number("   11     "));
// console.log(Number("12.34"));
// console.log(Number("John"));

///  If else

// if (Number("0n")) {
//     console.log("bu shart togri");
// } else {
//     console.log("shart notogri");
// }

// Boolean conversion   Falsy   va TtueThy
//Falsy values
// 0
//""
//false
//undefined
//NaN
//-0
//null
//0n

//Truthy values lar falsy valuega kirmaydigan barcha qiymatlar kiradi
// "kudygckdg"

//agar a sonijuft bolsa ekranga  bu juft son  dep chiqarsin agar toq bolsa toq son dep chiqarsin

// let a = 14;
// if (a % 2 == 0) {
//     console.log(a, "juft son ");
// } else {
//     console.log(a, "toq son");
// }