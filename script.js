/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
 arr.map((value) =>{
  if(value.profession==="developer"){
   console.log(value); 
  }
 }); //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  arr.forEach((value) =>{
    if(value.profession==="developer"){
     console.log(value); 
    }
   }); //Write your code here , just console.log
}

function addData() {
let obj= {id:4,name:"susan",age:"20",profession:"intern"} ;
arr.push(obj);
console.log(arr);  //Write your code here, just console.log
}

function removeAdmin() {
  arr.filter((value) =>{
    if(value.profession==="admin"){
     arr.pop(value); 
    }
   }); 
  console.log(arr);  //Write your code here, just console.log
}

function concatenateArray() {
  let arr1 = [
    { id: 4, name: "param", age: "34", profession: "Traveler" },
    { id: 5, name: "carry", age: "27", profession: "youtuber" },
    { id: 6, name: "elvish", age: "23", profession: "vlogger" },
  ];
 let newobj= arr.concat(arr1);
  console.log(newobj);
  //Write your code here, just console.log
}
