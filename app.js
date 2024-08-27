// {
//     // m.asala 01
//     let son = +prompt('butun son kiriting son musbat bolsa 1 ga oshiriladi aks holatda sonning ozini qaytaruvchi dastur')
        // .
//     if (son > 0) {
//         console.log(`${son + 1} `);
//     } else {
//         console.log(`${son}`);
//     }
// }

// {
//      // m.asala 02
//      let son = +prompt('butun son kiriting son musbat bolsa 1 ga oshiriladi aks holatda 2ga kamaytrladi ')
        // .
//      if (son > 0) {
//          console.log(`${son + 1} `);
//      } else {
//          console.log(`${son - 2}`);
//      }
// }

// {
//      // m.asala 03
//      let son = +prompt('butun son kiriting son musbat bolsa 1 ga oshiriladi aks holatda 2ga kamaytrladi agar son 0 ga teng bolsa 10ga oshiriladi')
        // .
//     if (son > 0) {
//         console.log(`${son + 1}`);
//     }else if(son < 0){
//         console.log(`${son - 2}`);
//     }else if(son === 0){
//         console.log(`${son + 10}`);
//     }  
// }

// {
//     // m.asala 04 va masala 5
//     alert('3 ta son kiriting shular orasidan nechta musbat va nechta manfiy son borligini aniqlovchi dastur')

//     let a = +prompt('Birinchi A sonini kiriting')
//     let b = +prompt('Birinchi B sonini kiriting')
//     let c = +prompt('Birinchi C sonini kiriting')

        // .
//     if (a > 0) {
//         console.log(`Birinchi kiritgan ${a} soninggiz MUSBAT son`);
//     } else {
//         console.log(`Birinchi kiritgan ${a} soninggiz MANFIY son`);
//     }
        // .
//     if (b > 0) {
//         console.log(`Ikkinchi kiritgan ${b} soninggiz MUSBAT son`);
//     } else {
//         console.log(`Ikkinchi kiritgan ${b} soninggiz MANFIY son`);
//     }
        // .
//     if (c > 0) {
//         console.log(`Uchinchi kiritgan ${c} soninggiz MUSBAT son`);
//     } else {
//         console.log(`Uchinchi kiritgan ${c} soninggiz MANFIY son`);
//     }


// }

// {
//     // m.asala 06 
//     alert('Ikkita sonning qaysi biri katta ekanligini aniqlovchi dastur')
//     let a = +prompt('A sonnini kiriting')
//     let b = +prompt('B sonnini kiriting')
                // .        
//     if (a > b) {
//         console.log(` Birinchi kiritgan  ${a} soninggiz katta`);
//     }else{
//         console.log(`Ikkinchi kiritgan  ${b} soninggiz  katta`);
//     }
// }

// {
//     // m.asala 07 
//     alert('Ikkita sonning qaysi kichikligini va tartib raqamini aniqlovchi dastur')
//     let a = +prompt('A sonini kiriting')
//     let b = +prompt('B sonini kiriting')
                // .
//     if (a < b) {
//         console.log(`Birinchi kiritgan soniggiz kichik son va tartib raqami oldinda ${a}`);
//     } else if(a > b) {
//         console.log(`Ikkinchi kiritgan soniggiz kichik son va tartib raqami oldinda ${b}`);
//     }
// }

// {
//     // m.asala 08
//     alert('Ikkita sonni avval kattasini keyin kichigini aniqlovchi dastur')
//     let a = +prompt('A raqamni kiriting')
//     let b = +prompt('B raqamni kiriting')

//     if (a > b) {
//         console.log(`Birinchi kiritgan ${a} soninggiz katta  ikkinchi kiritgan ${b} soninggiz kichik `);
//     }else if(b > a){
//         console.log(`Ikkinchi kiritgan ${b} soninggiz katta  birinchi kiritgan ${a} soninggiz kichik `);
//     }

// }

// {
//     // masala 09
//     alert('Ikkita A va B sonlarni kiriting sonlar ozgartrladi A doim kichik B doim kattaga ozgaradi')
//     let a = +prompt('A sonini kiriting')
//     let b = +prompt('B sonini kiriting')

//    if (a === b) {
//         a = a - a + 1
//         console.log(`Kiritgan sonlaringgizni ikkalasi teng  va birinchi kiritgan A soninggiz kichraytrldi ${a}`);
//    } else if (a > b) {
//         a = a - a + 1
//         b = b  + 10
//         console.log(`Birinchi kiritgan soninggiz ${a}ga kichraytrildi ikkinchi kiritilgan soninggiz ${b} ga kattalashtrldi`);
//    }else if(b > a){
//         a = a - a + 1
//         b = b + 10 
//         console.log(`Birinchi kiritgan soninggiz ${a}ga kichraytrildi ikkinchi kiritilgan soninggiz ${b} ga kattalashtrldi`);
//    }
// }

// {
//     alert('A va B butun sonlari berilgan. Agar ozgaruvchilar ozaro teng bolmasa A va B ozgaruvchilari ulaming yigindisini ozlashtirsin. Agar teng bolsa 0 ni o`zlashtirsin. A va B ning qiymati ekranga chiqarilsin. ')
//     let a = +prompt('A sonini kiriting')
//     let b = +prompt('B sonini kiriting')

//     if (a != b) {
//         console.log(`Siz kiritgan sonlar teng emas ${a + b}`);
//     } else if(a === b){
//         a = 0
//         b = 0
//         console.log(`Siz kiritgan sonlar teng shuning uchun qiymat o'zgartrladi birinchi ${a} va ikkinchi ${b}`);
//     }
// }