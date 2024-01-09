//print command
console.log('hello');
// variables
a=10; //non-declared variables
console.log(a);
var a=10; //variable declration
console.log(a);//value is 10;
{
var a=90;// value to 90
console.log(a);
}  
console.log(a); 
let b=24;
console.log(b);
{
let b=23;
console.log(b);
}
console.log(b);
b=45;
console.log(b);
const v=45;
{
const v=78;
console.log(v);
}
console.log(v);
 // datatypes
 console.log(typeof(v));
 let firstName='My name is Maya';
 console.log(typeof(firstName));

 let isAvailable=true;
 console.log(typeof(isAvailable));
 //undefined
 var t;
 console.log(typeof(t));

 var st=0;
 console.log(typeof(st));
 //Arrays
 let arr1=[1,2,3,4,'ajmal'];
 console.log(arr1[5]);
//JS objects
let person={
    name:'ajmal',
    age:24,
    place:'tvm',
}
console.log(person.place)
//Use New Keyword in JS
let car=new Object();
car.brand='Hyundai'
car.model='i10'
car.color='black'
console.log(car);
// Array of Objects
var arr_obj=[{name:'maya',location:'kochi'},{name:'meera',location:'tvm'}]
console.log(arr_obj[1].location);

//opertors
let tr=8;
console.log(tr+=3);
// increment operator
let inc=7;//first variable
let inc1=++inc;//second variable
console.log(inc1);
//conditional statements
if(inc===inc1){
    console.log('the values are equal')
} else {
    console.log('the values are not equal')
}
//conditional statements
if((inc===inc1)&&(inc==89)){
    console.log('both values are equal and its is 89')
}
else{
    console.log('the condition check failed');
}
let re=90;
let ne=100;
let x=(ne-re)+(8**2);
console.log(x);
//functions
function addval(ad1,ad2) {
    var sum=ad1+ad2;
    console.log('the calculated sum is'+sum);
}
addval(10,20); //function call
// looping statements
// write a program for printing the  number from 1 to 10
for (let i = 0; i<10; i++) {
    console.log(i+1);
}
//create an array with 5 elements and print all elements in the array
let arr3=['apple','orange','grape','berry','pear']
// for (let i=0; i < arr3.length; i++) {
 //   console.log(arr3[i]);
// }
// for of loop
for (item of arr3){
    console.log(item);
}
// for in loop
let person1={name:'joe',age:78,place:'tvm'}
for(x in person1){
    console.log(person1[x]);
}
//whle loop
let j=1;
while (j<=10) {
    console.log(j);
    j++;
}
//do while
do {
    console.log(j);
    j++;
}while (j<=10);


 


 