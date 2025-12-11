//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function num(){
    return 10;
}
function add(a,b){
    return a+b;
}
let res=add(num(),10);
console.log("result= "+res);

//Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
const firstLetters=(firstName,lastName)=>{
    let firstNameFirstLetter=firstName[0];
    let lastNameLastLetter=lastName[0];
    return (firstNameFirstLetter+lastNameLastLetter)
}
console.log(firstLetters("Roger","Waters"));
console.log(firstLetters("Bharath","Uppari"));
