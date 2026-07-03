// CHAPTER:9-11

// QUESTION:1

var city=prompt("Enter your city name");
if(city==="karachi"){
   alert("Welcome to city of lights");
}

// Question:2

var gender=prompt("Enter your gender");
if(gender==="male"){
    alert("Good Morning Sir");
}
if(gender==="female"){
    alert("Good Morning Ma'am");
}

// Question:3

var color=prompt("Enter the color of road traffic light");
if(color==="red"){
    alert("Must Stop");
}
if(color==="yellow"){
    alert("Ready to move");
}
if(color==="green"){
    alert("Move now");
}

// Question:4

var fuel=prompt("Enter the remaining fuel in car(in litres)");
if(fuel<0.25){
   alert("Please refill the fuel in your car");
}

Question:5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} //true
 var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }  //not true

  var c = 12;
 if (c++ === 13){
  alert("condition 1 is true");
  } //not true
 if(c === 13){
  alert("condition 2 is true");
  }//true
 if (++c < 14){
  alert("condition 3 is true");
  } //not true
 if(c === 14){
  alert("condition 4 is true");
  } //true

 var materialCost = 20000;
 var laborCost = 2000;
    var totalCost = materialCost + laborCost;   
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    } //true

    if (true){
    alert("True");
    } //true

    if (false){
    alert("False");
    } //not true

if("car" < "cat"){
   alert("car is smaller than cat");
}//true

// Question:6

var marks1=+prompt("Enter marks of subject 1");
var marks2=+prompt("Enter marks of subject 2");
var marks3=+prompt("Enter marks of subject 3");
var totalmarks=+prompt("Enter total marks");
var obtainedmarks=marks1+marks2+marks3;
var percentage=(obtainedmarks/totalmarks)*100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total Marks: "+totalmarks);
document.write("<br>Marks Obtained: "+obtainedmarks);  
document.write("<br>Percentage: "+percentage+"%");
document.write("<br>Grade: A-one");
document.write("<br>Remarks: Excellent");  

// Question:7

var secretNumber=7;
var guessNumber=+prompt("Guess the secret number between 1 to 10");
if(guessNumber===secretNumber){
   alert("Bingo! Correct answer");
}
if(guessNumber===++secretNumber){
   alert("Close enough to the correct answer");
}

// Question:8

var number=+prompt("Enter a number");
if(number%3===0){
    alert("The number is divisible by 3");
}

// Question:9

var number=+prompt("Enter a number");
if(number%2===0){
    alert("The number is even");
}
else{
    alert("The number is odd");
}

// Question:10

var temperature=+prompt("Enter the temperature");
if(temperature>40){
    alert("It is too hot outside.");
}
if(temperature>30){
    alert("The Weather today is Normal.");
}
if(temperature>20){
    alert("Today’s Weather is cool.");
}
if(temperature>10){
    alert("OMG! Today’s weather is so Cool.");
}
    
// Question:11

var firstNumber=+prompt("Enter first number");
var secondNumber=+prompt("Enter second number");
var operation=prompt("Enter operation (+,-,*,/,%):");
if(operation==="+"){
    alert(firstNumber+secondNumber);
}
if(operation==="-"){
    alert(firstNumber-secondNumber);
}
if(operation==="*"){
    alert(firstNumber*secondNumber);
}
if(operation==="/"){
    alert(firstNumber/secondNumber);
}
if(operation==="%"){
    alert(firstNumber%secondNumber);
}  

// ----END OF CHAPTER:9-11----//


// CHAPTER:12-13

// QUESTION:1

var character=prompt("Enter a character");
if(character.charCodeAt(0)>=65 && character.charCodeAt(0)<=90){
    alert("The character is an uppercase letter");
}
if(character.charCodeAt(0)>=97 && character.charCodeAt(0)<=122){
    alert("The character is a lowercase letter");
}
if(character.charCodeAt(0)>=48 && character.charCodeAt(0)<=57){
    alert("The character is a number");
}

// QUESTION:2

var firstInteger=+prompt("Enter first integer");
var secondInteger=+prompt("Enter second integer");
if(firstInteger>secondInteger){
    alert(firstInteger+" is larger than "+secondInteger);
}
if(secondInteger>firstInteger){
    alert(secondInteger+" is larger than "+firstInteger);
}
if(firstInteger===secondInteger){
    alert("Both integers are equal");
}

// QUESTION:3

var number=+prompt("Enter a number");
if(number>0){
    alert("The number is positive");
}
if(number<0){
    alert("The number is negative");
}
if(number===0){
    alert("The number is zero");
}

// QUESTION:4

var character=prompt("Enter a character");
if(character.toLowerCase()==="a" || character.toLowerCase()==="e" || character.toLowerCase()==="i" || character.toLowerCase()==="o" || character.toLowerCase()==="u"){
    alert("The character is a vowel");
}
else{
    alert("The character is not a vowel");
}

// QUESTION:5

var password="ast0810";
var userPassword=prompt("Enter your password");
if(userPassword===""){
    alert("Please enter your password");
}
if(userPassword==="ast0810"){
    alert("Password is correct");
}
else{
    alert("Password is incorrect");
}

//QUESTION:6

var greeting;
var hour=13;
var hour=+prompt("Enter the hour in 24-hour format (0-23)");
if(hour<18){
    alert(greeting="Good day");
}
else{
    alert(greeting="Good evening");
}

//QUESTION:7

var time=+prompt("Enter time in 24-hour format (0000-2359)");
if(time>=0000 && time<1200){
    alert("Good morning");
}
if(time>=1200 && time<1700){
    alert("Good afternoon");
}
if(time>=1700 && time<2100){
    alert("Good evening");
}
if(time>=2100 && time<=2359){
    alert("Good night");
}

//----END OF CHAPTER:12-13----//