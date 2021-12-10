//  1 
var no1 = 23
var no2 = 24
if (no1>no2){
    console.log(no1," is greater.");
}
else{
    console.log(no2," is greater.");
}
//...............................................
// 3
var number = -9
if (number>0){
    console.log(number," is a positive number");
} 
else if(number<0){
    console.log(number," is a negative number");
}
else if (number===0){
    console.log(number," is a zero");
}
else{
    console.log("Invalid Input");
}
//..............................................
// 4
var number = 22
if (number %5===0){
    console.log(number," is divisible by 5");
}
else if (number%11===0){
    console.log(number," is divisible by 11");
}
else{
    console.log(number," is not divisble by 5 and 11");
}
//.......................................................
// 5
var number = 1
if (number%2===0){
    console.log(number," is an even number");
}
else{
    console.log(number," is an odd number");
}
//.......................................
// 7
var character = 3

if (character==="a","z"){
    console.log(character," is an alphabet");
}
else if(character!="a","z"){
    console.log(character," is not an alphabet");
}
else{
    console.log("invalid input");
}
//......................................
// 8 vowel or consonant
var character = "z"

if (character==="a","e","i","o","u"){
    console.log(character," is a vowel");
}
else {
    console.log(character," is a consonant");
}
//..........................
// 10 upper case or lower case
var string = "ALI Malik"
if (string===string.toLowerCase()){
    console.log(string," is in lowercase");
}
else if(string===string.toUpperCase()){
    console.log(string," is in uppercase");
}
else{
    console.log(string," is not in an uppercase and lowercase");
}
//............................................
// 14 5 subject marks 
var physics = 30
if (physics>=90){
    console.log("Physics Grade :","Grade A");
}
else if (physics>=80) {
    console.log("Physics Grade :","Grade B");
}
else if(physics>=70){
    console.log("Physics Grade :","Grade C");
}
else if(physics>=60){
    console.log("Physics Grade :","Grade D");
}
else if (physics>=40){
    console.log("Physics Grade :","Grade E");
}
else if (physics<40){
    console.log("Physics Grade :","Grade F");
}
else{
    console.log("invalid input");
}
// be continued...
//.................................


