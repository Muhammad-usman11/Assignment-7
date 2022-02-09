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
// 2 
var value_1 = 23
var value_2 = 2
var value_3 = 1000

if (value_1==value_2==value_3){
    console.log("numbers are equal");
}

else if (value_1>=value_2 && value_1>=value_3){
    console.log(value_1," is big value");
}
else if (value_2>=value_1 && value_2>=value_3){
    console.log(value_2," is big value");
}
else if (value_3>=value_1 && value_3>=value_2){
    console.log(value_3," is big value");
}
//..........................................
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
// 6
var year = 2014
if ( (year%4===0) && (year%100!=0) || (year%400===0) ) {
    console.log(year," is a leap year");
}
else{
    console.log(year," is not a leap year");
}
//........................................
// 7
var character = "Hina Bilal"

if ( (character >= "a" && character <= "z") || (character >= 'A' && character <= 'Z') ){
    console.log(character," is an alphabet");
}
else{
    console.log(character," is not an alphabet");
}

//......................................
// 8 vowel or consonant
var character = "iu"

if ((character==='a' || character==='e' || character==='i' || character==='o' || character==='u') ){
    console.log(character," is a vowel");
}
else {
    console.log(character," is a consonant");
}
//..........................
// 9
var character = '*({}))'

var spch = /^[^a-zA-Z0-9]+$/
var dig = /[0-9]+$/ 
var alphabet = /[a-zA-Z]+$/
if ( character.match(alphabet) ){
    console.log(character," is an alphabet");
}
else if ( character.match(dig) ) {
    console.log(character," is a digit");
}
else if (character.match(spch)) {
    console.log(character," is a special character");
}
else{
    console.log("invalid input");
}
//.................................................
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
var chemistry = 30
if (chemistry>=90){
    console.log("Chemistry Grade :","Grade A");
}
else if (chemistry>=80) {
    console.log("Chemistry Grade :","Grade B");
}
else if(chemistry>=70){
    console.log("Chemistry Grade :","Grade C");
}
else if(chemistry>=60){
    console.log("Chemistry Grade :","Grade D");
}
else if (chemistry>=40){
    console.log("Chemistry Grade :","Grade E");
}
else if (chemistry<40){
    console.log("Chemistry Grade :","Grade F");
}
else{
    console.log("invalid input");
}
// be continued...
//.................................
// 16
var user_unit = 200
if (user_unit>250){
    var rate = user_unit*1.50
    var charges = 20/100*rate
    var total_bill = rate + charges 
    console.log("Your electricity bill :",total_bill);
}
else if (user_unit>150){
    var rate = user_unit*1.20
    var charges = 20/100*rate
    var total_bill = rate + charges 
    console.log("Your electricity bill :",total_bill);
}
else if (user_unit>50){
    var rate = user_unit*0.75
    var charges = 20/100*rate
    var total_bill = rate + charges 
    console.log("Your electricity bill :",total_bill);
}
else if (user_unit<=50){
    var rate = user_unit*0.50
    var charges = 20/100*rate
    var total_bill = rate + charges 
    console.log("Your electricity bill :",total_bill);
}
