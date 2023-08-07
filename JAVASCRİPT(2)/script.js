// example{
    // ||(OR), && (AND), !(NOT)


// A - 91-100
// B - 81-90
// C - 71-80
// D - 61-70
// E - 51-60
// F - Get dersini oxu

// let a=prompt('balinizi qeyd edin')

// if(a>90 && a<=100){
//     console.log("A")
// }else if(a>80 && a<=90){
// console.log("B");
// }else if(a>70 && a<=80){
// console.log("C");
// }else if(a>60 && a<=70){
//     console.log("D");
// }else if(a>50 && a<=60){
//     console.log("E");
// }else{
//     console.log('get dersini oxu');
// }

//NOT   !=
//a!=55

// let gender='female'
// if(gender == 'male' || gender == 'female'){
//     console.log('male or female');    
// }else{
//     console.log('wrong');
    
// }

//IF, ELSE IF, ELSE
//SWITCH, CASE, BREAK, DEFAULT
 
// let a=5
// switch(a){
//     case 3:
//         console.log('3');
//         break;
//     case 5:
//         console.log('5');
//         break;
//     case 4:
//         console.log('4');

//     default:
//         console.log('wrong number');
//         break;
// }


//LOOPS

// let start =0
// while(start>= 10){
//     console.log('start');                                                !!!!!!!
//     start++;
    
// }

// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 3);

//FOR

// for(let i=1; i<=10; i++ ){
//     if(i%2==0){
//         console.log('cut reqemdir ' + i)
//      } else{
//         console.log('tek reqemlidir')
//      }   
// }

//Konsola N dəfə «Hello World!» mesajı çıxaran proqram yazın.
//N ədədini itifadəçi daxil edir.

// let number = prompt ('Reqemi daxil edin')
// for( let i=1; i<=number; i++){
//     console.log('HELLO WORLD!' + i)
// }

// N-ə qədər, 3-ə qalıqsız bölünən bütün ədədləri tapın. N ədədini istifadəçi daxil edir.
// let number = prompt('reqemi daxil edin')
// for(i=1; i<=number; i++){
//     if(i%3==0){
//         console.log('3-ə qalıqsız bölünən bütün ədədləri tapın ' + i);        
//     }
// }

// N natural ədədlərin cəmini göstərən proqramı yazın. N rəqəmini istifadəçi daxil edir
// 5 daxil etse -> Cavab olmalıdır 15. (1+2+3+4+5).

// let number = prompt('reqemi daxil edin')

// let s=0

// for(let i=1; i<=number; i++){
//  s+=i //s=s+i
// }
// console.log(s)

//Function
// function numbersFunction(){
//     console.log('1');
//     console.log('2');
//     console.log('3');
// }
// numbersFunction()
// numbersFunction()
// numbersFunction()
// numbersFunction()
// }


//Konsola N dəfə «Hello World!» mesajı çıxaran proqram yazın.
//N ədədini itifadəçi daxil edir.
function message(){
let number = prompt ('Reqemi daxil edin')
for( let i=1; i<=number; i++){
    console.log('HELLO WORLD!' + i)
}
}
// message()

//5-ə qədər bütün ədədlərin hasilin tapan proqram tərtib edin
function numbersProblem(){
    s=1
    for(i=1; i<=5; i++){
    s*=i}
    console.log(s);    
}
// numbersProblem()

// N natural ədədlərin cəmini göstərən proqramı yazın. N rəqəmini istifadəçi daxil edir
// 5 daxil etse -> Cavab olmalıdır 15. (1+2+3+4+5).
function badNumbersProblem1(){
let number = prompt('reqemi daxil edin')
let s=0
for(let i=1; i<=number; i++){
 s+=i 
}console.log(s)
}
// badNumbersProblem()

 // N-ə qədər, 3-ə qalıqsız bölünən bütün ədədləri tapın. N ədədini istifadəçi daxil edir.
function badNumbersProblem2(){
let number = prompt('reqemi daxil edin')
for(i=1; i<=number; i++){
    if(i%3==0){
        console.log(i);        
    }}}
// badNumbersProblem2()

//N-ə qədər, 3-ə qalıqsız bölünən ədədlərin cəmini tapın. N ədədini istifadəçi daxil edir.
// 14 daxil edildi -> consolda 30 olmalıdır (3 + 6 + 9 +12)
function badNumbersProblemEnd(){
    let number = prompt('reqemi daxil edin')
    let s=0
    for(i=1; i<=number; i++){
    if(i%3==0){
        s+=i
}}console.log(s);
} 
// badNumbersProblemEnd()