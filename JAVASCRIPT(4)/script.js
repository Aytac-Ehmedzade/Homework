let a = prompt('Select box to animator:\n1.red \n2.green \n3.blue')
console.log(a);
let b = prompt('select animation: \n1)kvadrat dovre \n2)firlanan boyume \n3)kvadrat donen dovre \n4)hamisi');
console.log(b);
let c = prompt('nece saniye')

const reddiv = document.getElementsByClassName("redcontainer");
const bluediv = document.getElementsByClassName("bluecontainer");
const greendiv = document.getElementsByClassName("greencontainer");

if (a=1) {
    console.log(reddiv);
}
else if(a=2){
    console.log(bluediv);
}
else if(a=3){
    console.log(greendiv);
    
}
