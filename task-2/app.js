// TODO: ------------------------ CHAPTER 05----------------------------

//* Q1

let num1 = +prompt("enter first number:","")
let num2 = +prompt("enter second number:","")
let result = num1+num2
document.getElementById("para").innerHTML =`the addition of ${num1} and ${num2} is: ${result}`
alert(`the addition of ${num1} and ${num2} is: ${result}`)

//* Q2
// SUBTRACTION
let num1 = +prompt("enter first number:","")
let num2 = +prompt("enter second number:","")
let result = num1-num2
document.getElementById("para").innerHTML =`the subtraction of ${num1} and ${num2} is: ${result}`

// MULTIPLICATION
let num1 = +prompt("enter first number:","")
let num2 = +prompt("enter second number:","")
let result = num1*num2
document.getElementById("para").innerHTML =`the multiplication of ${num1} and ${num2} is: ${result}`

// DIVISION

let num1 = +prompt("enter first number:","")
let num2 = +prompt("enter second number:","")
let result = num1/num2
document.getElementById("para").innerHTML =`the division of ${num1} and ${num2} is: ${result}`

// MODULLUS
let num1 = +prompt("enter first number:","")
let num2 = +prompt("enter second number:","")
let result = num1%num2
document.getElementById("para").innerHTML =`the modullus of ${num1} and ${num2} is: ${result}`



//* Q3
// a
let num;
// // b
document.getElementById("heading").innerHTML = `The value after variable declaration is:`+ typeof(num);
// c
num=10
// d
document.getElementById("para2").innerHTML = `initial value :${num} `
// // e
 num ++;

// f
document.getElementById("para3").innerHTML = `value after increment is:${num}`

// g
num +=7;
// h
document.getElementById("para4").innerHTML = `value after addition is:${num} `

// i
num--;

// j

document.getElementById("para5").innerHTML = `value after decrement is:${num} `

// k
result = num%3;
// j
document.getElementById("para6").innerHTML = `The remainder with 3 is:${result} `


//* Q4
let cost = 600
let numberOFTickets = +prompt("number of tickets you want :",1)
// console.log(typeof(numberOFTickets))
let totalCost = cost*numberOFTickets;
document.getElementById("sub-heading").innerHTML = `total cost to buy ${numberOFTickets} tickets is ${totalCost}PKR`

//* Q5
let a=+prompt("select any number:",4)
const nodelist = document.querySelectorAll(".table")
// console.log(nodelist)
// nodelist.forEach(ele=>{ele.innerHTML= {`
// ${a} x = `})
if(a){
for(let i =1 ;i<=nodelist.length;i++) {
  nodelist[i-1].innerHTML=`${a} x ${i} =${a*i}`
}}

//* Q6
let c = +prompt("tell me the temperature in degree centigrade","");
let C_F = (c*9/5) +32;
document.getElementById("heading").innerHTML =`${c}<sup>o</sup>C  is <sup>o</sup>F is ${C_F }`
let f = +prompt("tell me the temperature in degree centigrade","");
let F_C = (f-32)*5/9;
document.getElementById("heading1").innerHTML =`${f}<sup>o</sup>F  is <sup>o</sup>C is ${F_C }`

//* Q7
let item1_price = 650
let item2_price = 100
let quantity_item1=3
let quantity_item2=7
let shipping_charges = 100;

let total =  (item1_price *quantity_item1 ) +  (item2_price *quantity_item2 )+shipping_charges;
// console.log(total)
// let array =[item1_price,item2_price,quantity_item1,quantity_item2,shipping_charges];

document.getElementById("heading").innerHTML= `Shopping Cart`
document.getElementById("para").innerHTML = `Price of item 1 is: ${item1_price}`
document.getElementById("para2").innerHTML = `quantity of item 1 :${quantity_item1}`
document.getElementById("para3").innerHTML = `Price of item 2 is: ${item2_price}`
document.getElementById("para4").innerHTML = `quantity of item 2 :${quantity_item2}`
document.getElementById("para5").innerHTML = `your total bill is: ${total}`
// const nodes = document.querySelectorAll(".table");
// let i =0;
// let length=array.length;
// do {
//   nodes[i].innerHTML = array[i];
//   i++;
// }
// while (i<length)

// for(let i=0;i<length;i++) {
//   nodes[i].innerHTML = `${array[i]}`;
// }
  
  // document.getElementById("div").innerHTML= item1_price;

//* Q8
const ele = document.createElement("h1");
ele.innerHTML="MARK SHEET";
ele.style.color = "blue";
const parent = document.getElementById("div");
parent.appendChild(ele);

let obtained_marks = +prompt("Enter your obtained marks","")
const total_marks = +prompt("Enter total marks","")
let percentage = ((obtained_marks/total_marks)*100).toFixed(2);

document.getElementById("para3").innerHTML =`your obtained percentage is ${percentage}%`
document.getElementById("para2").innerHTML =`your obtained marks :${obtained_marks}`;
document.getElementById("para").innerHTML =`Total marks: ${total_marks}`;

//* Q9
let rial = +prompt("how many rial do you have:" ,"")
let $ =  +prompt("how many US dollars do you have:" ,"")

let pkr = ((rial*82.16)+($*308.18)).toFixed(2);
 document.getElementById("heading").innerHTML =`Currency in PKR ${pkr}`

//* Q10
let number = +prompt("any number:" ,"")
// a,b,c
let answer = number +5 *10/2;
console.log(answer);

//* Q11

// AGE CALCULATOR
let current_year = new Date().getFullYear();
let birth_year =  +prompt("Enter your birth year please:","");
let age = current_year - birth_year;
const heading = document.getElementById("heading")
heading.innerHTML=`AGE CALCULATOR :`;
document.getElementById("para").innerHTML=`Current year: ${current_year}`;
document.getElementById("para2").innerHTML=`Your birth year: ${birth_year}`;
document.getElementById("para3").innerHTML=`Your age:${age} years`;

//* Q12
let radius = +prompt("Enter radius of circle in metres");
// const PI =3.14;
let circumference = (2*Math.PI*radius).toFixed(3);
let area = (Math.PI*(radius)**2).toFixed(3);
// let array=[circumference,area];
// array.forEach((item)=>{
//   console.log(item);
// }) 
if(radius){

document.getElementById("heading").innerHTML=`THE  GEOMETRIZER`;
document.getElementById("para").innerHTML=`Radius of circle: ${radius}m`;
document.getElementById("para2").innerHTML=`Circumference of circle = ${circumference}m`;
document.getElementById("para3").innerHTML=`Area of circle =${area}m<sup>2</sup>`;
}
else
  alert("enter a valid number!")

//* Q13

let favourite_snack = prompt("Tell us your favourite snack","chocolate/candy");
if(favourite_snack) {
let userAge = +prompt("Tell us your age in years","");
if(userAge) {
let expectedAge = Math.floor(Math.random() * 70) + userAge;
let snacksPerDay = +prompt(`How many ${favourite_snack}  do you have daily`,"");
let lifeTimeSupply = (expectedAge - userAge)  * snacksPerDay;
document.getElementById("heading").innerHTML=`The Life Time Supply calculator`;
document.getElementById("para").innerHTML=`Favourite snack ${favourite_snack}`;
document.getElementById("para2").innerHTML=`Current age ${userAge}`;
document.getElementById("para3").innerHTML=`Estimated maximum age ${expectedAge}`;
document.getElementById("para4").innerHTML=`Amouont of snacks per day ${snacksPerDay} `;
document.getElementById("para5").innerHTML=`you will need ${lifeTimeSupply} ${favourite_snack} to last you until the expected old age of  ${expectedAge}`;


}
// console.log(expectedAge)
// console.log(userAge)
// console.log(snacksPerDay)
// console.log(lifeTimeSupply)
// console.log(expectedAge)

else 
  alert("please enter valid age!")
}
else 
    alert("please enter valid snack!")