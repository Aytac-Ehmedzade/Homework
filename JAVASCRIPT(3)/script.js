//example{// let text = 'lorem impsum'
    // console.log(text.length);
    // console.log(text.toUpperCase());
    // console.log(text.toLowerCase());
    
    // function sayHello(example){
    //     console.log(example);
    // }
    // sayHello('Hello')
    
    
    // let number1 = prompt('birinci reqem');
    // let number2 = prompt('ikinci reqem');
    
    // let a = parseInt(number1);
    // let b = parseInt(number2);
    
    //  function sum(){
    //     console.log(a+b);
    //  }
    // sum()
    
    // let obj = new Object();
    // console.log(typeof obj);
    
    // let person = {
    // name: "Max",
    // age: 30,
    // education: true,
    // flower:function(){
    //     console.log('flower');}
    // }
    // console.log(person);
    // person.flower()
    
    // console.log('Kohne object');
    // console.log(person);
    
    // person.status = "yoyo";
    // console.log('yeni object');
    // console.log(person);
    // console.log(person.status);
    
    // //delete
    // delete person.age;
    // console.log(person);
    
    //Const objectin içində olan propertyni dəyişə bilir.
    // let number = {
    // a: 7,}
    // number.a=9;
    // console.log(number);
    
    // const number = {
    // a:9,}
    // number.a=7
    // console.log(number)
    
    
    // let number1 = prompt("first number");
    // let number2 = prompt("second number");
    
    // let a = parseInt(number1);
    // let b = parseInt(number2);
    // let c = 5;
    
    // function numbers(a, b, c) {
    //     return a * b + c;
    // }
    
    // console.log(numbers(a, b, c));
    
    
    //ARRAY
    // let arr = new Array();
    // console.log(typeof arr);
    
    // let arr=["first","second","third","fourth","fifth","sixth","example"];
    // console.log(arr);
    
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }
    
    // console.log(arr[arr.length-1]);
    // console.log(arr.at(-1));  //en sondakini secir
    
    // let arr=["first","second","third","fourth","fifth","sixth","example"];
    // console.log(arr);
    
    // arr.push("flower");  //en sona elave edir
    // console.log(arr);
    
    // arr.pop(); //sonuncu elementi silir
    // console.log(arr);
    
    // arr.shift(); //birinci elementi silir
    // console.log(arr);
    
    // arr.unshift("zero"); //birinci elemente elave edir
    // console.log(arr);
    
    // for(let a of arr) {   //for-un daha tez wsul ile 1den 10-a kimi siralanmasi
    //     console.log(a);
    // }}
console.log(homework)
//task1
//Ədədin kvadratını qaytaran funksiyanı yazın. Ededi istifadeci daxil edir
// let number1 = prompt("reqemi daxil edin");

// let a = parseInt(number1);
        
// function numbers(a) {
//     return a * a;
// }
    
// console.log(numbers(a));

//task2
//Celsius göstəricisini Farenheitə çevirən funksiyasını yazın
// calFahrenheit(20) //68
// let number1 = prompt("celsius gostericisini daxil edin");

// let a = parseInt(number1);
// let b = 9;
// let c = 5;
// let d = 32;
// function numbers(a, b, c, d) {
//     return b / c * a + d ;
// }
// console.log(numbers(a, b, c, d));

//task3
//Ədədi tərsinə çevirən funksiyasını yazın

// let rev = 0;
// let num = prompt("ededi daxil edin");
// let lastDigit;

// while(num != 0){
//   lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : "+rev);

//task4
//Sətirdəki Saitlərin sayını yazın 
//count("Salam"); //2
// function countVowel(str) { 
//     let count = str.match(/[aeiou]/gi).length;
//     return count;
// }
// let string = prompt('Enter a string: ');

// let result = countVowel(string);

// console.log(result);

// failtask{
//     // let i = prompt("metni daxil edin")
// // let count = 0;
// // if(i=='a' && i=='o' && i=='u' && i=='i' && i=='e' ){
// //     count +=1;
// // }
// // console.log(count);
// }
//task5
//Iki rəqəmin cəmisini tapın. add adında bir funksiya yaradırsız. İstifadəçidən iki rəqəmini daxil etməyini xahiş edin (num1, num2).
//Daha sonra console-da həmin rəqəmlərinin cəmini qeyd edin
// let number1 = prompt('birinci reqem');
// let number2 = prompt('ikinci reqem');

// let a = parseInt(number1);
// let b = parseInt(number2);
    
// function collect(){
//     console.log(a+b);
// }
// collect()