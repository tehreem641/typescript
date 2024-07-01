// FULL TYPESCRIPT COURSE 
// VARIABLE
// console.log("hello world")
// let firstname="ali"
// console.log(firstname)
// PRIMITIVE DATA TYPES 
// 1.string
// 2.number
// 3.boolean
// 4.undefined 
// OPERATORS
// 1.ADDITION
// let n1=1
// let n2=3
// console.log(n1+n2)
// 2. SUBTRACTION 
// let qty=2
// console.log(qty - 3)
// 3. MULTIPLICATION
// let mul=4
// console.log(mul * 6)
// 4.DIVISION 
// let div=7
// console.log(div /3)
// 5.EXPONENTIATION
// let d1=4
// let d2=2
// console.log(d1** d2)
// 6. MODULE
// let s1=4
// let s2=5
// console.log(s1%s2)
// 7.ASSIGNMENT OPERATOR: assignment operators are used to assigned values to variables
// let age=10
// age + 5
// console.log(age)
// 8. COMPARISON OPERATORS
// let age=22
// console.log(age==22)
// let age=`22`
// console.log(22===22)
// let age=`22`
// console.log(`22`===`22`)
// let age = 22
// console.log(22!=22)
// let age=22
// console.log(age<10)
// console.log(age>10)
// console.log(age<=22)
// console.log(age>=22)
// IF ELSE, ELSE IF STATEMENT
//example 1
// let student =("male")
// if(student==="male"){
//     console.log("yes come in" )
// }else if(student==="female"){
//     console.log("dont come in")
// }
//example2
// let salary=40000
// let monthlyexpense=60000
// if(salary===40000){
//     console.log("you dont have enough money")
// }else {
//     console.log("you have enough money")
// }
// example3
// let budget=30000
// let car=15000
// let colour="red"
// if((colour==="red" ||  colour==="black") && car<=budget){
//     console.log("buy car")
// }else{
//     console.log("earn more")
// }
//IF NESTED STATEMENT
// let country = "pakistan"
// let age= 18
// if (country==="pakistan"){
//     if (age>=18){
//         console.log("ticket is ready")
//     }else{
//         console.log("age restriction")
//     }
// }
// GREET FUNCTION 
// function greet(){
//     console.log("hello hamza")
// }
// greet();
// function greet(name:string){
//     console.log("hello",name)
// }
// greet("hamzah")
// greet("ali")
// ARROW FUNCTION
// function sum (num1:number, num2:number){
//     return num1 + num2
// }
// function multiply(num1:number){
//     console.log(num1*2)
// }
// let ans = sum(2,2)
// console.log(ans)
// multiply(ans)
//ARRAY
// let fruits=["apple","mango","banana"]
// console.log(fruits)
// console.log(fruits[1])
// console.log(fruits[2],fruits[3])
// removing and adding elements 
// push() method adds a new element to an array at end
// let menu=["kofta","biryani","kheer"]
// menu.push("chicken")
// console.log(menu)
//pop() method remove an elements from an end
// let menu=["kofta","biryani","kheer"]
// menu.pop()
// console.log(menu)
// push() return the new array length
// const animals=["cat","dog","horse"]
// const count=animals.push("cow")
// console.log(count)
// console.log(animals)
// pop() return the value that is pop out
// const animals=["cat","dog","horse"]
// console.log(animals.pop())
// console.log(animals)
// // REMOVING,INSERTING AND EXTRACTING ELEMETS
// shift()removes the first element
// let menu=["kofta","biryani","kheer"]
// menu.shift()
// console.log(menu)
// shift() return value that is shifted out
// let menu=["kofta","biryani","kheer"]
// // menu.shift()
// console.log(menu.shift())
// console.log(menu)
//unshift() add new elements at beginning
// const number=[1,2,3]
// console.log(number.unshift(4,5))
//unshift() provide new lenght to array
// const number=[1,2,3]
// console.log(number.unshift(4,5))
// console.log(number)
// SPLICING AND SLICING
// splice() add new items to an array
// const fruits=["banana",'apple',"amango"]
// fruits.splice(2,0,"lemon","kiwi")
// console.log(fruits)
//slice() slice out a piece of array
// const array=[1,2,3]
// const citrus =array.slice(2);
// console.log(array)
//        LOOPS
// for (let i=2;i<5;i++){
//     console.log("drama")
// }
// for(let i=1;i<11;i++){
//     console.log('$(i)')
// }
// const std=["ali","bilal","arham"]
// for(let i=1;i<3;i++){
//     console.log('$ std[i')
//     console.log(i)
// }
//      NESTED LOOP
// for(let i=0;i<3;i++){
//     console.log("parentloop",i)
//     for(let j=0;j<3;j++){
//         console.log("childloop",j)
//     }
// }
//       JSON ONJECT 
// let video={
//     title:"video1",
//     description:'funny',
//     image:"https://image.com"
// }
// console.log(video)
//                    UNION (||)
// typescript allows us to use move than one datatype for a variable or a function parameter
//    let a:string| number |boolean ="zainab"
//    a=10
//    a='tehreem'
//    a=true
//to fixed(this method only remains with number)
//    let age:number=22
//    console.log(age.toFixed(5))
// TYPE OF( means datatype like string, number etc)
// let newage=Math.random()>0.9?22:"khan"
// if(typeof newage === "string"){
//     newage.toUpperCase()
// }else{
//     newage.toFixed(2)
// }
// console.log(newage)
//  LITERAL TYPE( the datatype ou assigned it never allowed other one to assigned)
// let trafficlight: "red"|"yellow"|3 = "yellow"
//          INTERFACES
//OBJECT( it is type of all non-primitive values primitive values =undefined)
// let teacher:{
// name:string;
// salary:number;
// "full-name":string;
// age:number;
// } ={
//     name: "hamzah",
//     salary: 50000,
//     "full-name": "hazah ali",
//     age: 20
// }
// console.log(teacher.age)
// console.log(teacher["full-name"])
// OBJECT ALIASED( it is used to simplyfy complex types and assigned name for any type)
// type student ={
//     name:string,
// age:number,
// class:number
// }
// let student1={
//     name:"ali",
//     age:18,
//     class:10
// }
// let student2={
//     name:"bilal",
//     age:20,
//     class:10
// }
// console.log(student2.class)
// console.log(student1.name)
// STRUCTURAL YPE BJECT LITERAL( features that allow us to define the structure
//  or shape of an object and specify the propertise and methods that an object has or should have)
// interface deal1{
//     food:string
// }
// interface deal2{
//     food:string,
//     drink:string
// }
// let aliorder:deal1={
//     food:'pasta'
// }
// let bilalorder:deal2={
//     food:'pasta',
//     drink:'cocacola'
// }
// aliorder=bilalorder
// // bilalorder=aliorder ( error due to missing property)
// console.log(bilalorder)
//               NARROWING
// let age:string|number;
// age=22
// age="22"
// console.log(age)
// console.log(age)
//                INTERSECTION (it combines multiple types into ones)
// type student={
//     name:string,
//     rollnumber:number
// }
// type teacher={
//     name:string,
//     rollnumber:number
// }
// let std1:student={
// name:"abeera",
// rollnumber:123456
// }
// let teac1:student={
//     name:"raheela",
//     rollnumber:789101
//     }
//  let both :student & teacher={
// name:"hifza",
// rollnumber:123890
//  }
// console.log(teac1.name)
// console.log(both.rollnumber)
// EXPLICIT CASTING [as]( it allows developers to xplicity change the type of value from one type to another)
// let a:unknown;
// a:"tehreem" as string
// let myname:unknown="tehreem";
// console.log((myname as string).toUpperCase());
// ENUM ( allows a developer define a set of named constants)
// enum days{
//     sunday,
// mon,
// tues,
// wed,
// thurs,
// fri,
// sat,
// }
// console.log(days.thurs)
// let meetingday :days=days.mon;
// if(meetingday===days.mon){
//     console.log("aa jao")
// }
// else if(meetingday === days.sunday){
// console.log("kal anna")
// }
// PARAMETERS 
// optional parameters(?): a parameter that can be made optional when calling a function.
// let fullname=(firstname:string,lastname?:string)=>firstname+''+lastname;
// let fulln=fullname('tehreem')
// console.log(fulln)
// DEFAULT PARAMETER: it is used to assign some default value to the variable
// let fullname=(firstname:string,lastname:"kanwal")=>{
//     console.log(firstname,lastname)
//     return firstname+''+lastname;
// }
// let fulln=fullname('tehreem',"kanwal")
// console.log(fulln)
// RESTPARAMETER: it allows us to pass zero or any number of argument of the speified type to the function
// let makemessage=(name:string, message:string [])=>{
//     console.log("hello world")
//     console.log(message.join(","))
// }
// makemessage("ali","hiba")
//       FUNCTION 
// function add({num1,num2}:{num1:number,num2:number}){
// return num1+num2
// }
// let result=add({num1:3,num2:5})
// console.log(result)
// ANONYMOUS FUNCTION OR TYPE FUNCTION( anonymous function means unknown .it define the
//  shape of functio by specifying parameter types and return types.)
// type sum=(num1:number,num2:number)=>number;
// let sum:sum=function(num1,num2){
//     return num1 * num2
// }
// let result=sum(4,14)
// console.log(result)
// LAMBDA FUNCTION OR ARROW FUNCTION ( lambda function are similar to user.defined functions but without name
// we use (=>) in the arow function and we dont use function keyboard)
// let sum=(num1:number,num2:number):number=>num1-num2;
// let result=sum(4,7)
// console.log(result)
// FUNCTION OVERLOAD( it has multiple functions with the same name but different parameters types and return types)
// function add(arg1:string,arg2:string):string;
// function add(arg1:boolean,arg:boolean):boolean;
// function add(arg1:any,arg2:any):any
// {
//     return arg1+arg2
// }
// let result=add(6,7)
// console.log(result)
//TUPLES( tuple is a new datatypes ehich include two sets of value of different datatypes)
// let room:[string,number,string]=["chair",4,"pen"]
// // room.push("apple")
// room.pop()
// console.log(room)
// CALL BACK FUNCTION (callback function are a foundational concepts in typescript and javascript
//  for managing asynchronous operations)
// setTimeout(()=>{
//     console.log("user profile")
//     setTimeout(()=>{
//         console.log("userpost")
//         setTimeout(()=>{
//             console.log("usercomment")
//         },100)
//     },40)
// },10)
//   A PROMISE ( it is an object that represent an operation that hasn't completed yet but is expected in the future)
// var sum=0
// function func(){
// return new Promise((resolve,reject)=>{
//     for(var i=0;i<1000;i++){
//         console.log(sum)
//         sum+=i;
//     }
//     if (sum>200){
//         resolve("greater than")
//     }
//     else{
//     reject("error:")
//     }
// })}
// async function somefunction(){
//     func()
//     console.log("after func")
// }
// somefunction()
// console.log("outside everything")
// FETCH( it returns a promise that resolev to the response to that request as soon as the server responds with header-even if the server response is an HTTP error ststus)
// let data=fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// // .then((res)=>console.log(res))
// .catch((res)=>console.log(res))
// console.log("data",data)
//ASYNC FUNCTION( it always return a value)
// async function datafunc(){
// let fetchdata=await fetch("https://jsonplaceholder.typicode.com/users")
// let data=await fetchdata.json()
// console.log(fetchdata)
// }
// datafunc()
// ASYNC PRODUCT (multitasker or typer)
// console.log("first")
// console.log("second")
// console.log("third")
// setTimeout(()=>console.log("fourth"),1000)
//                  OOP(OBJECT ORIENTED PROGRAMMING)
// it is a programming paradigm based on calsses and object rather than functions and logic
// class House{
//     numberofrooms:number=4;
//     numberofbathroom:number=3;
// }
// let house1=new House()
// console.log(house1)
//CONSTRUCTOR FUNCTION (it is a special function that exists inside a class that is called only once when the object is created)
// class house{
//     readonly numberofrooms:number;
// readonly numberofgarage:number;
// constructor(numberofrooms:number,numberofgarage:number){
//     this.numberofrooms=numberofrooms
//     this.numberofgarage=numberofgarage
// }
// doorbell(){
//     console.log("bell pressed")
// }
// }
// let house1=new house(4,2)
// let house2=new house(3,5)
// console.log(house1)
// console.log(house2)
// PILLAR
// INHERITANCE( its an aspect of OOPS language which provide the ability of a program to create new class from an existing class)
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    return person;
}());
var Person = new person("abeera", 16);
console.log(person);
