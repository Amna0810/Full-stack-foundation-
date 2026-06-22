// Assignment no:03

// Q1:
// var age=18
// alert("I am " + age + " years old")

// Q2:
// var numberOfVisits=14
// alert("You have visited this site " + numberOfVisits + " times")

//Q3:
// var birthYear =2007
// document.write("My birth year is " + birthYear)

// Q;4
//var visitorName="John Doe"
//var productTitle="T-shirt"
//var quantity=5
//document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store")

//CHAPTER 3 ENDS

//CHAPTER 4 STARTS

//Q1:
//var name="Amna Tanveer", age=18, city="Karachi";

//Q;3
//Legal variable names
// var name
// var _name
// var $name
// var name1
// var name_1

//Illegal variable names
// var 1name
// var -name
// var @name
// var name-1
// var name@1

//Q4:
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable <br>")
// document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name <br>")
// document.write("Variable names are case sensitive <br>")
// document.write("Variable names should not be JS keywords")   

//CHAPTER 4 ENDS

//CHAPTER 5 STARTS

//Q1:
// var num1=3, num2=5
// var sum=num1+num2
// document.write("The sum of " + num1 + " and " + num2 + " is " + sum)

//Q2:
// var num1=3, num2=5
// var sub=num1-num2
// var mul=num1*num2
// var div=num1/num2
// var mod=num1%num2
// document.write("The difference of " + num1 + " and " + num2 + " is " + sub)
// document.write("<br>The product of " + num1 + " and " + num2 + " is " + mul)
// document.write("<br>The quotient of " + num1 + " and " + num2 + " is " + div)
// document.write("<br>The modulus of " + num1 + " and " + num2 + " is " + mod)

//Q3:
// var num
// document.write("Value after variable declaration is: " + num)
// num=5
// document.write("<br>Initial value: " + num)
// num++
// document.write("<br>Value after increment is: " + num)
// num=num+7
// document.write("<br>Value after addition is: " + num)
// num--
// document.write("<br>Value after decrement is: " + num)
// num=num/3
// document.write("<br>The remainder is: " + num)

//Q4:
// var ticketPrice=600
// var totalCost=ticketPrice*5
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR")

//Q5:
// var num=4
// document.write("Table of " + num + "<br>")
// for(var i=1; i<=10; i++){
//     document.write(num + " x " + i + " = " + (num*i) + "<br>")
// }

//Q6:
// var celsiusTemp=25
// var fahrenheitTemp=(celsiusTemp*9/5)+32
// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F <br>")
// var fahrenheitTemp2=70
// var celsiusTemp2=(fahrenheitTemp2-32)*5/9
// document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C")

//Q7:
// var item1Price=650, item2Price=100, item1Quantity=3, item2Quantity=7, shippingCharges=100
// var totalCost=(item1Price*item1Quantity)+(item2Price*item2Quantity)+shippingCharges
// document.write("<h1>Shopping Cart</h1>")
// document.write("Price of item 1 is " + item1Price + "<br>")
// document.write("Quantity of item 1 is " + item1Quantity + "<br>")
// document.write("Price of item 2 is " + item2Price + "<br>")
// document.write("Quantity of item 2 is " + item2Quantity + "<br>")
// document.write("Shipping Charges " + shippingCharges + "<br><br>")
// document.write("Total cost of your order is " + totalCost)

//Q8:
// var totalMarks=980, marksObtained=804
// var percentage=(marksObtained/totalMarks)*100
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks: " + totalMarks + "<br>")
// document.write("Marks obtained: " + marksObtained + "<br>")
// document.write("Percentage: " + percentage + "%")

//Q9:
// var usDollar=10, saudiRiyal=25
// var pkrFromUSD=usDollar*104.80
// var pkrFromSR=saudiRiyal*28
// var totalPKR=pkrFromUSD+pkrFromSR
// document.write("<h1>Currency in PKR</h1>")
// document.write("Total currency in PKR: " + totalPKR)

//Q10:
// var num=5
// var result=((num+5)*10)/2
// document.write("The result is: " + result)

//Q11:
//  var currentYear=2026, birthYear=2007
//  var age=currentYear-birthYear
//  document.write("Current Year: " + currentYear + "<br>")
//  document.write("Birth Year: " + birthYear + "<br>")
//  document.write("Your age is: " + age)

//Q12:
// var radius=20
// var circumference=2*3.142*radius
// var area=3.142*radius*radius
// document.write("Radius of a circle: " + radius + "<br>")
// document.write("The circumference is: " + circumference + "<br>")
// document.write("The area is: " + area)

//Q13:
// var snack="Chocolate Chip"
// var currentAge=18
// var maxAge=80
// var amountPerDay=3
// var totalNeeded=(maxAge-currentAge)*amountPerDay
// document.write("Favourite Snack: " + snack + "<br>")
// document.write("Current Age: " + currentAge + "<br>")
// document.write("Estimated Maximum Age: " + maxAge + "<br>")
// document.write("Amount of snacks per day: " + amountPerDay + "<br>")
// document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge)   

//CHAPTER 5 ENDS

//CHAPTER 6-9 STARTS

//Q1:
// var num=10
// document.write("Result: <br>")
// document.write("The value of a is: " + num + "<br>")
// document.write("...........................................<br><br>")
// document.write("The value of ++a is: " + (++num) + "<br>")
// document.write("Now the value of a is: " + num + "<br><br>")
// document.write("The value of a++ is: " + (num++) + "<br>")
// document.write("Now the value of a is: " + num + "<br><br>")
// document.write("The value of --a is: " + (--num) + "<br>")
// document.write("Now the value of a is: " + num + "<br><br>")
// document.write("The value of a-- is: " + (num--) + "<br>")
// document.write("Now the value of a is: " + num)

//Q2:
// var a=2, b=1
// var result=--a - --b + ++b + b--
// document.write("a is: " + a + "<br>")
// document.write("b is: " + b + "<br>")
// document.write("result is: " + result)

//Q3:
// var name=prompt("Enter your name")
// alert("Hello " + name + ", welcome to our website!")

//Q5:
// var num=+prompt("Enter a number to show its multiplication table")
// if(num){
//     document.write("Table of " + num + "<br>")
//     for(var i=1; i<=10; i++){
//         document.write(num + " x " + i + " = " + (num*i) + "<br>")
//     }
// } else {
//     num=5
//     document.write("Table of " + num + "<br>")
//     for(var i=1; i<=10; i++){
//         document.write(num + " x " + i + " = " + (num*i) + "<br>")
//     }
// }

//Q6:
// var subject1=prompt("Enter name of subject 1")
// var subject2=prompt("Enter name of subject 2")
// var subject3=prompt("Enter name of subject 3")
// var totalMarks=100
// var marksObtained1=+prompt("Enter marks obtained in " + subject1)
// var marksObtained2=+prompt("Enter marks obtained in " + subject2)
// var marksObtained3=+prompt("Enter marks obtained in " + subject3)
// var percentage1=(marksObtained1/totalMarks)*100
// var percentage2=(marksObtained2/totalMarks)*100
// var percentage3=(marksObtained3/totalMarks)*100
// document.write("<table border='1'>")
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>")
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksObtained1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>")
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksObtained2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>")
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksObtained3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>")
// document.write("</table>")

//CHAPTER 6-9 ENDS  
